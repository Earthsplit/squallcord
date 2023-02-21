import Avatar from '@mui/material/Avatar'
import { FC } from 'react'
import { FaRobot } from 'react-icons/fa'

interface ChatTitleProps {
	logo: string
	showChatGPT: () => void
}

const ChatTitle: FC<ChatTitleProps> = ({ showChatGPT, logo }) => {
	return (
		<div className='chat__info'>
			<div className='chat__info-wrapper'>
				<Avatar src={logo} />
				<span>SquallCord</span>
			</div>
			<div onClick={showChatGPT}>
				<FaRobot />
			</div>
		</div>
	)
}

export default ChatTitle
