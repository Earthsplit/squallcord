import { FC } from 'react'
import userDefault from '../../assets/user_default.svg'
import { AvatarProps } from '../../types'

const Avatar: FC<AvatarProps> = props => {
	return (
		<>
			{props.src === '' ? (
				<img
					src={userDefault}
					className='h-[44px] w-[44px] rounded-full'
				></img>
			) : (
				<img
					{...props}
					className={`${props.styles} rounded-full`}
				></img>
			)}
		</>
	)
}

export default Avatar
