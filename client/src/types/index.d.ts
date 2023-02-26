type ChatProps = {
	socket: Socket
	username: string
	avatar: string
	userCount: number
}

type ChatMessageProps = {
	styles: 'flex-row-reverse mr-4' | 'flex-row ml-4'
	post: {
		avatar: string
		user: string
		message: string
	}
	// ref: Ref<HTMLDivElement>
}

type ChatAsideProps = {
	logo: string
	showChatGPT: () => void
}

type NewPost = {
	id: number
	user: string
	avatar: string
	message: string
}

type EmojiData = {
	fallback: string
	id: string
	native: string
	shortcodes: string
	size: {
		value: string
		transform: (value: any) => any
	}
	set: {
		value: string
		choices: string[]
	}
	skin: {
		value: number
		choices: number[]
	}
}

type EmojiPickerProps = {
	addEmoji: (emoji: EmojiData) => void
	emojis: boolean
}

export {
	EmojiPickerProps,
	EmojiData,
	NewPost,
	ChatAsideProps,
	ChatMessageProps,
	ChatProps,
}
