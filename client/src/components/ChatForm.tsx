import { FC, useState } from 'react'
import { BiSmile } from '@react-icons/all-files/bi/BiSmile'
import { ChatFormProps, EmojiData } from '../types'
import EmojiPicker from './UI/EmojiPicker'
import MyInput from './UI/MyInput'
import SendButton from './UI/SendButton'

const ChatForm: FC<ChatFormProps> = ({
	addNewMessage,
	currentMessage,
	setCurrentMessage,
}) => {
	const [emojis, setEmojis] = useState<boolean>(false)

	const addEmoji = (emoji: EmojiData) => {
		setCurrentMessage(currentMessage + emoji.native)
	}

	const setShow = () => {
		setEmojis(!emojis)
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
				className='cursor-pointer border-l border-grayLight p-[var(--paddingForm)]'
				onClick={event => {
					event.stopPropagation()
					setShow()
				}}
			>
				<BiSmile size={25} />
			</div>
			<EmojiPicker
				emojis={emojis}
				addEmoji={addEmoji}
				onClickOutside={setShow}
			/>
			<SendButton onClick={addNewMessage} />
		</form>
	)
}

export default ChatForm
