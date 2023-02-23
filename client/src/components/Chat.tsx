import React, { FC, useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'
import ChatTitle from './ChatTitle'
import SendButton from './UI/SendButton'
import MyInput from './UI/MyInput'
import logo from '../assets/logo.jpeg'
import { Socket } from 'socket.io-client'
import ChatGPT from './ChatGPT'
import ChatHeader from './Chat/ChatHeader'

interface ChatProps {
	socket: Socket
	username: string
	avatar: string
	userCount: number
}

interface NewPost {
	id: number
	user: string
	avatar: string
	message: string
}

const Chat: FC<ChatProps> = ({ userCount, socket, username, avatar }) => {
	const [posts, setPosts] = useState<NewPost[]>([])
	const [currentMessage, setCurrentMessage] = useState<string>('')
	const [chatGPT, setChatGPT] = useState<boolean>(false)
	const userRef = useRef<null | HTMLDivElement>(null)

	// const scrollToBottom = () => {
	// 	userRef.current?.scrollIntoView({ behavior: 'smooth' })
	// }

	// useEffect(() => {
	// 	scrollToBottom()
	// }, [posts])

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

	const showChatGPT = () => {
		setChatGPT(!chatGPT)
	}

	return (
		<div className='flex h-full flex-col gap-4'>
			<div className='flex'>
				<ChatTitle
					logo={logo}
					showChatGPT={showChatGPT}
				/>
				<div className='flex h-screen w-full flex-grow flex-col'>
					<ChatHeader
						logo={logo}
						userCount={userCount}
					/>
					<div className='w-full flex-grow overflow-scroll py-2'>
						{posts.map(post => (
							<ChatMessage
								ref={userRef}
								post={post}
								key={post.id}
								direction={
									post.user === username ? 'flex-row-reverse' : 'flex-row'
								}
							/>
						))}
					</div>

					<form
						onSubmit={addNewMessage}
						className='flex w-full border-t border-grayLight'
					>
						<MyInput
							value={currentMessage}
							placeholder='Type a message...'
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setCurrentMessage(e.target.value)
							}
						/>
						<SendButton onClick={addNewMessage} />
					</form>
				</div>
			</div>
			{chatGPT && <ChatGPT />}
		</div>
	)
}

export default Chat
