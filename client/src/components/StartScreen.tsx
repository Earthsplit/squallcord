import { FC } from 'react'
import MyInput from './UI/MyInput'

interface StartScreenProps {
	joinRoom: (e: React.FormEvent) => void
	setUsername: (username: string) => void
	onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StartScreen: FC<StartScreenProps> = ({
	joinRoom,
	setUsername,
	onFileInputChange,
}) => {
	return (
		<div className='m-auto flex h-screen  w-[750px] flex-col items-center justify-center'>
			<h3>Введіть ваше імʼя</h3>
			<form
				onSubmit={joinRoom}
				className='mt-4 flex flex-col gap-2'
			>
				<MyInput
					placeholder='Файний хлопець 007'
					onChange={event => {
						setUsername(event.target.value)
					}}
				/>
				<button
					type='submit'
					onClick={joinRoom}
					className='rounded border border-grayLight py-[5px] px-[15px]'
				>
					Приєднатися
				</button>
				<label className='flex justify-center border-b border-grayLight p-4'>
					Add a profile picture
					<input
						type='file'
						id='avatar'
						name='avatar'
						accept='image/png,image/jpeg,image/gif'
						onChange={onFileInputChange}
						className='hidden'
					/>
				</label>
			</form>
		</div>
	)
}

export default StartScreen
