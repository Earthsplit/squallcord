import express from 'express'
import http from 'http'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { Server } from 'socket.io'
import bodyParser from 'body-parser'

import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const app = express()

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

app.use(bodyParser.json())
app.use(cors())

app.post('/chatgpt', async (req, res) => {
	// Get the prompt from the request
	const { prompt } = req.body

	// Generate a response with ChatGPT
	const completion = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: prompt,
		temperature: 0,
		max_tokens: 500,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	})
	res.send(completion.data.choices[0].text)
})

const server = http.createServer(app)

const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
})

io.on('connection', socket => {
	console.log(`User Connected: ${socket.id}`)

	socket.on('send_message', data => {
		io.emit('receive_message', data)
	})

	socket.on('disconnect', () => {
		console.log('User Disconnected', socket.id)
	})
})

const port = 3001

server.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
