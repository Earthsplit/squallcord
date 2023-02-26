import React, { FC, useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import ChatAside from './ChatAside'
import SendButton from './UI/SendButton'
import MyInput from './UI/MyInput'
import logo from '../assets/logo.jpeg'
import ChatGPT from './ChatGPT'
import ChatHeader from './ChatHeader'
import EmojiPicker from './UI/EmojiPicker'
import { BiSmile } from 'react-icons/bi'
import { EmojiData, ChatProps, NewPost } from '../types/index'

const Chat: FC<ChatProps> = ({ userCount, socket, username, avatar }) => {
	const [posts, setPosts] = useState<NewPost[]>([])
	const [currentMessage, setCurrentMessage] = useState<string>('')
	const [chatGPT, setChatGPT] = useState<boolean>(false)
	// const userRef = useRef<null | HTMLDivElement>(null)

	const [emojis, setEmojis] = useState<boolean>(false)

	const addEmoji = (emoji: EmojiData) => {
		setCurrentMessage(currentMessage + emoji.native)
	}

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
		socket.on('receive_message', (data: NewPost) => {
			setPosts([...posts, data])
		})
	})

	const showChatGPT = () => {
		setChatGPT(!chatGPT)
	}

	return (
		<div className='flex h-full flex-col gap-4'>
			<div className='flex'>
				<ChatAside
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
								// ref={userRef}
								post={post}
								key={post.id}
								styles={
									post.user === username
										? 'flex-row-reverse mr-4'
										: 'flex-row ml-4'
								}
							/>
						))}
					</div>

					<form
						onSubmit={addNewMessage}
						className='relative flex w-full items-center border-t border-grayLight'
					>
						<MyInput
							value={currentMessage}
							placeholder='Type a message...'
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setCurrentMessage(e.target.value)
							}
						/>
						<div
							className='cursor-pointer border-l border-grayLight p-[18px]'
							onClick={() => setEmojis(!emojis)}
						>
							<BiSmile size={25} />
						</div>
						<EmojiPicker
							emojis={emojis}
							addEmoji={addEmoji}
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
