import Avatar from '@mui/material/Avatar'
import { FC } from 'react'
import { FaRobot } from 'react-icons/fa'

interface ChatTitleProps {
	logo: string
	showChatGPT: () => void
}

const ChatTitle: FC<ChatTitleProps> = ({ showChatGPT, logo }) => {
	return (
		<header
			className='mb-[10px] flex h-screen w-[200px] flex-col items-center gap-2 overflow-hidden border-r border-grayLight 
    p-2 text-[20px] font-semibold'
		>
			<div className='flex items-center gap-1'>
				<Avatar
					src={logo}
					sx={{ width: 44, height: 44 }}
				/>
				<span>SquallCord</span>
			</div>
			<div onClick={showChatGPT}>
				<FaRobot />
			</div>
		</header>
	)
}

export default ChatTitle
