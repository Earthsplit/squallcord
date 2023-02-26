import { FC } from 'react'
import { FaRobot } from 'react-icons/fa'
import { ChatAsideProps } from '../types'
import Avatar from './UI/Avatar'

const ChatAside: FC<ChatAsideProps> = ({ showChatGPT, logo }) => {
	return (
		<aside
			className='mb-[10px] flex h-screen w-[200px] flex-col items-center gap-2 overflow-hidden border-r border-grayLight 
    p-2 text-[20px] font-semibold'
		>
			<div className='flex items-center gap-1'>
				<Avatar
					src={logo}
					styles='h-[44px] w-[44px]'
				/>
				<span>SquallCord</span>
			</div>
			<div onClick={showChatGPT}>
				<FaRobot />
			</div>
		</aside>
	)
}

export default ChatAside
