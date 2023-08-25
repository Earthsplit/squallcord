import { FC } from 'react'
import userDefault from '../../assets/user_default.svg'
import { AvatarProps } from '../../types'

const Avatar: FC<AvatarProps> = props => {
	return (
		<>
			{props.src === '' ? (
				<img
					src={userDefault}
					className='h-[40px] w-[40px] rounded-full'
				></img>
			) : (
				<img
					{...props}
					className={`${props.styles} rounded-full object-cover`}
				></img>
			)}
		</>
	)
}

export default Avatar
