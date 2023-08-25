import { FC, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import Chat from './components/Chat'
import './index.css'
import StartScreen from './components/StartScreen'
import { useEffect } from 'react'
import { ContextMenuProvider } from './components/contextMenu/ContextMenu.provider'

const socket: Socket = io('http://localhost:3001/')

const App: FC = () => {
	const [username, setUsername] = useState<string>('')
	const [showChat, setShowChat] = useState(false)
	const [avatar, setAvatar] = useState<string>('')
	const [userCount, setUserCount] = useState<number>(0)

	const joinRoom = (e: React.FormEvent) => {
		e.preventDefault()
		if (username !== '') {
			setShowChat(true)
		}
	}

	useEffect(() => {
		socket.on('user_connect', data => {
			setUserCount(data)
		})

		socket.on('user_disconnect', data => {
			setUserCount(data)
		})
	})

	const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// stores a file localy instead of going back to the server
		if (e.target.files) {
			setAvatar(URL.createObjectURL(e.target.files[0]))
		}
	}

	return (
		<div className='flex h-screen flex-col items-center justify-center overflow-hidden bg-main text-white'>
			{!showChat ? (
				<StartScreen
					joinRoom={joinRoom}
					setUsername={setUsername}
					onFileInputChange={onFileInputChange}
				/>
			) : (
				<ContextMenuProvider>
					<Chat
						socket={socket}
						username={username}
						avatar={avatar}
						userCount={userCount}
					/>
				</ContextMenuProvider>
			)}
		</div>
	)
}

export default App
