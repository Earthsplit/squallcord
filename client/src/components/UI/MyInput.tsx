import { FC } from 'react'

interface TextInputProps {
	value?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	styles?: string
}

const MyInput: FC<TextInputProps> = props => {
	return (
		<input
			{...props}
			type='text'
			placeholder={props.placeholder}
			className={`w-full border-none bg-main p-[18px] text-white outline-none placeholder:text-[14px] placeholder:text-[#a4b2c2] ${props.styles}`}
		/>
	)
}

export default MyInput
