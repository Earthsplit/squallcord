import { FC } from 'react'

interface TextInputProps {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: FC<TextInputProps> = props => {
	return (
		<input
			{...props}
			type='text'
			placeholder='Write a message...'
		/>
	)
}

export default TextInput
