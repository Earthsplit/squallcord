import { FC } from 'react'
import { IoSend } from 'react-icons/io5'

interface SendButtonProps {
	onClick: (e: React.FormEvent) => void
}

const SendButton: FC<SendButtonProps> = props => {
	return (
		<div
			{...props}
			className='sendButton'
		>
			<IoSend />
		</div>
	)
}

export default SendButton
