import Picker from '@emoji-mart/react'
import { FC } from 'react'
import { EmojiPickerProps } from '../../types/index'

const EmojiPicker: FC<EmojiPickerProps> = ({
	emojis,
	addEmoji,
	onClickOutside,
}) => {
	const emojiData = async () => {
		const response = await fetch(
			'https://cdn.jsdelivr.net/npm/@emoji-mart/data'
		)

		return response.json()
	}

	return (
		<>
			<div className='absolute bottom-[75px] right-0'>
				{emojis && (
					<Picker
						data={emojiData}
						onEmojiSelect={addEmoji}
						onClickOutside={onClickOutside}
					/>
				)}
			</div>
		</>
	)
}

export default EmojiPicker
