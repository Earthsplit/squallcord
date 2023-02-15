import Avatar from '@mui/material/Avatar'
import { FC, forwardRef, Ref } from 'react'

interface ChatMessageProps {
	direction: 'row-reverse' | 'row'
	post: {
		avatar: string
		user: string
		message: string
	}
	ref: Ref<HTMLDivElement>
}

const ChatMessage: FC<ChatMessageProps> = forwardRef((props, ref) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: props.direction,
				alignItems: 'center',
				gap: '0.5rem',
				marginLeft: '1rem',
			}}
		>
			<Avatar src={props.post.avatar} />

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
				<div
					ref={ref}
					style={{ fontWeight: '300', wordWrap: 'break-word' }}
				>
					{props.post.message}
				</div>
			</div>
		</div>
	)
})

export default ChatMessage
