import { FC } from 'react'
import { IoSend } from 'react-icons/io5'

interface SendButtonProps {
	onClick: (e: React.FormEvent) => void
}

const SendButton: FC<SendButtonProps> = props => {
	return (
		<div
			{...props}
			className='cursor-pointer border-l border-grayLight bg-main p-[18px]'
		>
			<IoSend size={20} />
		</div>
	)
}

export default SendButton
