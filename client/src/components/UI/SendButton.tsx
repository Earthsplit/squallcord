import { FC } from 'react'
import { IoSend } from '@react-icons/all-files/io5/IoSend'
import { SendButtonProps } from '../../types'

const SendButton: FC<SendButtonProps> = props => {
	return (
		<div
			{...props}
			className='cursor-pointer border-l border-grayLight bg-main p-[var(--paddingForm)]'
		>
			<IoSend size={20} />
		</div>
	)
}

export default SendButton
