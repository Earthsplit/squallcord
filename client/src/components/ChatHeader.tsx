import { FC } from 'react'
import Avatar from './UI/Avatar'

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
					styles='h-[36px] w-[36px]'
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
