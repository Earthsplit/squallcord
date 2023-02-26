import { FC } from 'react'
import { BiSmile } from 'react-icons/bi'
import EmojiPicker from './UI/EmojiPicker'
import SendButton from './UI/SendButton'
import MyInput from './UI/MyInput'
import { useState } from 'react'
import { NewPost } from '../types'

const ChatForm: FC = () => {
	const [posts, setPosts] = useState<NewPost[]>([])
	const [currentMessage, setCurrentMessage] = useState<string>('')

	const [emojis, setEmojis] = useState<boolean>(false)

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

	return (
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
	)
}

export default ChatForm
