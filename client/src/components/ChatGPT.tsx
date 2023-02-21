import { FC, useState } from 'react'
import axios from 'axios'

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
		<div className='chatGPT'>
			<form
				onSubmit={handleAPIRequest}
				className='chatGPT-form'
			>
				<input
					type='text'
					value={prompt}
					onChange={e => setPrompt(e.target.value)}
				/>
			</form>
			{showResponse && <div className='chatGPT-response'>{response}</div>}
		</div>
	)
}

export default ChatGPT
