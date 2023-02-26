import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { FC } from 'react'
import { EmojiPickerProps } from '../../types/index'

const EmojiPicker: FC<EmojiPickerProps> = ({ emojis, addEmoji }) => {
	return (
		<>
			<div className='absolute bottom-[75px] right-0'>
				{emojis && (
					<Picker
						data={data}
						onEmojiSelect={addEmoji}
					/>
				)}
			</div>
		</>
	)
}

export default EmojiPicker
