import { FC } from 'react'
import { TextInputProps } from '../../types'

const MyInput: FC<TextInputProps> = props => {
	return (
		<input
			{...props}
			type='text'
			name='text-field'
			autoComplete='off'
			placeholder={props.placeholder}
			className={`w-full border-none bg-main p-[var(--paddingForm)] text-white outline-none placeholder:text-[14px] placeholder:text-[#a4b2c2] ${props.styles}`}
		/>
	)
}

export default MyInput
