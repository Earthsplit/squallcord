import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io'
// import bodyParser from 'body-parser'

const app = express()

// app.use(bodyParser.json())
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
})

let userCount

io.on('connection', socket => {
	userCount = io.engine.clientsCount
	console.log(`User connected: ${socket.id}`)

	io.emit('user_connect', userCount)

	socket.on('send_message', data => {
		io.emit('receive_message', data)
	})

	socket.on('update_posts', data => {
		io.emit('receive_posts', data)
	})

	socket.on('disconnect', () => {
		userCount--
		console.log('User disconnected', socket.id)
		io.emit('user_disconnect', userCount)
	})
})

const port = 3001

server.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
