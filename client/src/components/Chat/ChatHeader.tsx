import Avatar from '@mui/material/Avatar'
import { FC } from 'react'
import { io, Socket } from 'socket.io-client'

interface ChatHeaderProps {
	logo: string
	userCount: number
}

const ChatHeader: FC<ChatHeaderProps> = ({ userCount, logo }) => {
	return (
		<header className='flex flex-row items-center border-b border-grayLight p-[15px]'>
			<div className='flex items-center gap-2'>
				<Avatar
					src={logo}
					sx={{ width: 36, height: 36 }}
				/>
				<div className='flex flex-col'>
					<span className='text-sm font-semibold'>SquallCord</span>
					<span className='text-[12px] text-stone-300'>Users: {userCount}</span>
				</div>
			</div>
		</header>
	)
}

export default ChatHeader
