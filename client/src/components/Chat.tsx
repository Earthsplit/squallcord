import React, { FC, useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'
import ChatTitle from './ChatTitle'
import SendButton from './UI/SendButton'
import TextInput from './UI/TextInput'
import logo from '../assets/logo.jpeg'
import { Socket } from 'socket.io-client'

interface ChatProps {
	socket: Socket
	username: string
	avatar: string
}

interface NewPost {
	id: number
	user: string
	avatar: string
	message: string
}

const Chat: FC<ChatProps> = ({ socket, username, avatar }) => {
	const [posts, setPosts] = useState<NewPost[]>([])
	const [currentMessage, setCurrentMessage] = useState<string>('')
	const userRef = useRef<null | HTMLDivElement>(null)

	const scrollToBottom = () => {
		userRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	}, [posts])

	const addNewMessage = (e: React.FormEvent) => {
		e.preventDefault()
		if (currentMessage !== '') {
			const newPost = {
				id: Date.now(),
				user: username,
				avatar: avatar,
				message: currentMessage,
			}

			socket.emit('send_message', newPost)
			setCurrentMessage('')
		}
	}

	useEffect(() => {
		socket.on('receive_message', data => {
			setPosts([...posts, data])
		})
	})

	return (
		<>
			<ChatTitle logo={logo} />
			<div className='chat__messages'>
				{posts.map(post => (
					<ChatMessage
						ref={userRef}
						post={post}
						key={post.id}
						direction={post.user === username ? 'row-reverse' : 'row'}
					/>
				))}
			</div>

			<form onSubmit={addNewMessage}>
				<TextInput
					value={currentMessage}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setCurrentMessage(e.target.value)
					}
				/>
				<SendButton onClick={addNewMessage} />
			</form>
		</>
	)
}

export default Chat
