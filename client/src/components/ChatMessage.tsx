import { FC, forwardRef, Ref } from 'react'
import Avatar from './UI/Avatar'
import { ChatMessageProps } from '../types/index'

const ChatMessage: FC<ChatMessageProps> = props => {
	return (
		<div className={`flex ${props.styles} items-center gap-2`}>
			<Avatar
				src={props.post.avatar}
				styles='h-[44px] w-[44px]'
			/>

			<div
				style={{
					backgroundColor: 'rgb(35, 47, 62)',
					padding: '10px',
					borderRadius: '10px',
					maxWidth: '50%',
					marginBottom: '7px',
				}}
			>
				<div
					style={{
						color: 'rgb(114, 203, 186)',
						marginBottom: '10px',
						letterSpacing: '0.4px',
					}}
				>
					{props.post.user}
				</div>
				<div style={{ fontWeight: '300', wordWrap: 'break-word' }}>
					{props.post.message}
				</div>
			</div>
		</div>
	)
}

export default ChatMessage
