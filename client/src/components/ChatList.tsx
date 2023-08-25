import { FC } from 'react'
import { ChatListProps } from '../types'
import ChatMessage from './ChatMessage'

const ChatList: FC<ChatListProps> = ({
	posts,
	handleContextMenu,
	username,
}) => {
	return (
		<div className='w-full flex-grow overflow-scroll py-2'>
			{posts.map(post => (
				<div
					onContextMenu={handleContextMenu}
					key={post.id}
				>
					{post.user === username ? (
						<ChatMessage
							key={post.id}
							post={post}
							fullMessage={false}
							styles='flex-row-reverse mr-[0.6rem]'
						/>
					) : (
						<ChatMessage
							key={post.id}
							post={post}
							fullMessage={true}
							styles='flex-row ml-[0.6rem]'
						/>
					)}
				</div>
			))}
		</div>
	)
}

export default ChatList
