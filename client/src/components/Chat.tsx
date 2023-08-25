import { FC, useEffect, useState, FormEvent } from 'react'
import logo from '../assets/logo.png'
import ChatHeader from './ChatHeader'
import { ChatProps, NewPost } from '../types/index'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import useChatContextMenu from '../hooks/useChatContextMenu'

import { v4 as uuidv4 } from 'uuid'

const Chat: FC<ChatProps> = ({ userCount, socket, username, avatar }) => {
	// Chat states
	const [posts, setPosts] = useState<NewPost[]>([])
	const [currentMessage, setCurrentMessage] = useState<string | undefined>('')

	// adding a new message if it's not empty
	const addNewMessage = (e: FormEvent) => {
		e.preventDefault()
		if (currentMessage?.trim() === '') {
			return
		} else {
			const newPost = {
				id: uuidv4(),
				user: username,
				avatar: avatar,
				message: currentMessage,
				timestamp: Date.now(),
			}

			// Sending the new post to the server
			socket.emit('send_message', newPost)
			setCurrentMessage('')
		}

		setCurrentMessage('')
	}

	// adding new post to the posts state
	useEffect(() => {
		socket.on('receive_message', (data: NewPost) => {
			setPosts([...posts, data])
		})
	}, [posts])

	useEffect(() => {
		socket.on('receive_posts', (postId: string | null) => {
			setPosts(posts.filter(post => post.id !== postId))
		})
	}, [posts])

	const onPostDelete = (
		postId: string | null,
		postUserName: string | undefined
	) => {
		// postId comes from data-key attr in ChatMessage.tsx
		if (!postUserName) {
			socket.emit('update_posts', postId)
		}
	}

	const { handleContextMenu, onContextMenuClose } = useChatContextMenu({
		onPostDelete,
	})

	return (
		<div className='flex h-full w-[var(--chatWidth)] flex-col gap-4'>
			<div
				className='flex'
				onClick={onContextMenuClose}
			>
				<div className='flex h-screen w-full flex-grow flex-col'>
					<ChatHeader
						logo={logo}
						userCount={userCount}
					/>
					<ChatList
						posts={posts}
						handleContextMenu={handleContextMenu}
						username={username}
					/>
					<ChatForm
						addNewMessage={addNewMessage}
						currentMessage={currentMessage}
						setCurrentMessage={setCurrentMessage}
					/>
				</div>
			</div>
		</div>
	)
}

export default Chat
