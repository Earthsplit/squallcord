import { FC } from 'react'
import Avatar from './UI/Avatar'
import { ChatMessageProps } from '../types/index'
import { toDateFormat } from '../helpers/toDateFormat'

const ChatMessage: FC<ChatMessageProps> = props => {
	return (
		<div
			className={`flex ${props.styles} mb-[7px] items-end gap-2`}
			data-key={props.post.id}
		>
			{props.fullMessage && (
				<Avatar
					src={props.post.avatar}
					styles='h-[40px] w-[40px]'
				/>
			)}

			<div
				className={`flex max-w-[var(--messageWidth)] flex-col rounded-[0.9375rem] ${
					props.fullMessage ? 'bg-blue' : 'bg-cyan-700'
				} px-[8px] py-[6px] leading-[1.3]`}
			>
				<div
					data-user
					className='font-medium text-blueLight'
				>
					{props.fullMessage && props.post.user}
				</div>
				<div className='break-words font-light'>
					<span data-message>{props.post.message}</span>

					<span className='relative top-[0.375rem] bottom-0 float-right ml-2 h-[1.25rem] text-xs text-graySub'>
						{toDateFormat(props.post.timestamp)}
					</span>
				</div>
			</div>
		</div>
	)
}

export default ChatMessage
