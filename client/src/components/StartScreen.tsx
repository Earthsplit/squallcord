import { FC } from 'react'
import { StartScreenProps } from '../types'
import MyInput from './UI/MyInput'

const StartScreen: FC<StartScreenProps> = ({
	joinRoom,
	setUsername,
	onFileInputChange,
}) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<h3>Enter your name</h3>
			<form
				onSubmit={joinRoom}
				className='mt-4 flex flex-col gap-2'
			>
				<MyInput
					placeholder='BobTop01'
					onChange={event => {
						setUsername(event.target.value)
					}}
				/>
				<button
					type='submit'
					onClick={joinRoom}
					className='rounded border border-grayLight py-[5px] px-[15px]'
				>
					Join
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
