import { FC, useState } from 'react'
import axios from 'axios'
import MyInput from './UI/MyInput'

const ChatGPT: FC = () => {
	const [response, setResponse] = useState<string>('')
	const [showResponse, setShowResponse] = useState<boolean>(false)
	const [prompt, setPrompt] = useState<string>('')

	const handleAPIRequest = async (e: React.ChangeEvent<HTMLFormElement>) => {
		setShowResponse(true)
		setPrompt('')
		e.preventDefault()
		let text = ''
		let loadInterval = setInterval(() => {
			text += '.'

			if (text === '....') {
				text = '.'
			}

			setResponse(text)
		}, 300)

		try {
			const response = await axios.post('http://localhost:3001/chatgpt', {
				prompt,
			})
			setResponse(response.data)
		} catch (err) {
			console.error(err)
		}

		clearInterval(loadInterval)
	}

	return (
		<div className='absolute top-0 right-3 mt-[calc(1rem+10px)] flex flex-col items-center gap-4'>
			<form
				onSubmit={handleAPIRequest}
				className='flex items-center border border-grayLight'
			>
				<MyInput
					value={prompt}
					onChange={e => setPrompt(e.target.value)}
					styles='bg-grayLight'
				/>
			</form>
			{showResponse && (
				<div className='w-[200px] rounded-md border border-grayLight bg-grayDark p-[15px] leading-normal'>
					{response}
				</div>
			)}
		</div>
	)
}

export default ChatGPT
