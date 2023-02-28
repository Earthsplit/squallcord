import { FC, useEffect, useRef, useState } from 'react'
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
import ContextMenu from './UI/ContextMenu'

const Chat: FC<ChatProps> = ({ userCount, socket, username, avatar }) => {
	// Chat states
	const [posts, setPosts] = useState<NewPost[]>([])
	const [currentMessage, setCurrentMessage] = useState<string | undefined>('')

	const postsCopy = [...posts]
	const lastPostMessage = posts.at(-1)?.message

	const [isEditing, setIsEditing] = useState<boolean>(false)

	// ChatGPT states
	const [chatGPT, setChatGPT] = useState<boolean>(false)

	// Emoji picker states
	const [emojis, setEmojis] = useState<boolean>(false)

	// ContextMenu states
	const [showContextMenu, setShowContextMenu] = useState<boolean>(false)
	const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })

	// adding a new message if it's not empty
	const addNewMessage = (e: React.FormEvent) => {
		e.preventDefault()
		if (currentMessage !== '') {
			if (!isEditing) {
				const newPost = {
					id: Date.now(),
					user: username,
					avatar: avatar,
					message: currentMessage,
				}

				// sending the new post to the server
				socket.emit('send_message', newPost)
				setCurrentMessage('')
			} else {
				postsCopy.at(-1)!.message = currentMessage

				// setPosts(postsCopy)
				setCurrentMessage('')
				setIsEditing(false)

				socket.emit('edit_message', postsCopy)
			}
		}
	}

	// adding emoji from emoji picker to a current message
	const addEmoji = (emoji: EmojiData) => {
		setCurrentMessage(currentMessage + emoji.native)
	}

	// adding new post to the posts state
	useEffect(() => {
		socket.on('receive_message', (data: NewPost) => {
			setPosts([...posts, data])
		})
	})

	// TODO: add a data type
	useEffect(() => {
		socket.on('receive_edit', (data: any) => {
			setPosts(data)
		})
	})

	const showChatGPT = () => {
		setChatGPT(!chatGPT)
	}

	// preventing the default context menu from showing
	// instead showing our own context menu on coordinates where the user clicked
	const handleContextMenu = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		e.preventDefault()

		const { pageX, pageY } = e
		setContextMenuPosition({ x: pageX, y: pageY })
		setShowContextMenu(true)
	}

	// TODO: implement context menu edit and delete

	function handleContextMenuAction(action: string, post: NewPost) {
		switch (action) {
			case 'Edit':
				setCurrentMessage(lastPostMessage)
				setIsEditing(true)
				closeContextMenu()
				break
			case 'Copy':
				closeContextMenu()
				break
			case 'Delete':
				closeContextMenu()
				break
			default:
				closeContextMenu()
				break
		}
	}

	const closeContextMenu = () => {
		setShowContextMenu(false)
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
					<div
						className='w-full flex-grow overflow-scroll py-2'
						onContextMenu={handleContextMenu}
					>
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
						{showContextMenu && (
							<ContextMenu
								x={contextMenuPosition.x}
								y={contextMenuPosition.y}
								handleContextMenuAction={handleContextMenuAction}
							/>
						)}
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
