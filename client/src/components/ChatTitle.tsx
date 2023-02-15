import Avatar from '@mui/material/Avatar'
import { FC } from 'react'

interface ChatTitleProps {
	logo: string
}

const ChatTitle: FC<ChatTitleProps> = ({ logo }) => {
	return (
		<div className='chat__info'>
			<Avatar src={logo} />
			<span>SquallCord</span>
		</div>
	)
}

export default ChatTitle
