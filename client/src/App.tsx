import { FC, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import Chat from './components/Chat'
import './App.css'

const socket: Socket = io('http://localhost:3001/')

const App: FC = () => {
	const [username, setUsername] = useState<string>('')
	const [showChat, setShowChat] = useState(false)
	const [avatar, setAvatar] = useState<string>('')

	const joinRoom = (e: React.FormEvent) => {
		e.preventDefault()
		if (username !== '') {
			setShowChat(true)
		}
	}

	const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// stores a file localy instead of going back to the server
		if (e.target.files) {
			setAvatar(URL.createObjectURL(e.target.files[0]))
		}
	}

	return (
		<div className='App'>
			{!showChat ? (
				<div className='centered'>
					<h3>Введіть ваше імʼя</h3>
					<form
						onSubmit={joinRoom}
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						<input
							type='text'
							placeholder='Файний хлопець 007'
							onChange={event => {
								setUsername(event.target.value)
							}}
						/>
						<button
							type='submit'
							onClick={joinRoom}
						>
							Приєднатися
						</button>
						<input
							type='file'
							accept='image/png,image/jpeg,image/gif'
							onChange={onFileInputChange}
						/>
					</form>
				</div>
			) : (
				<Chat
					socket={socket}
					username={username}
					avatar={avatar}
				/>
			)}
		</div>
	)
}

export default App
