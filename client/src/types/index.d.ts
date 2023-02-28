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
		message: string | NewPost | undefined
	}
	// ref: Ref<HTMLDivElement>
}

type ChatAsideProps = {
	logo: string
	showChatGPT: () => void
}

type StartScreenProps = {
	joinRoom: (e: React.FormEvent) => void
	setUsername: (username: string) => void
	onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type ChatHeaderProps = {
	logo: string
	userCount: number
}

type TextInputProps = {
	value?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	styles?: string
}

type ContextMenuProps = {
	x: number
	y: number
	handleContextMenuAction: (action: string, post: NewPost) => void
}

type AvatarProps = {
	styles: string
	src: string
}

type SendButtonProps = {
	onClick: (e: React.FormEvent) => void
}

type EmojiPickerProps = {
	addEmoji: (emoji: EmojiData) => void
	emojis: boolean
}

type NewPost = {
	id: number
	user: string
	avatar: string
	message: string | undefined
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

type PathParams = {
	root: string
	link: string
}

export {
	PathParams,
	EmojiData,
	NewPost,
	EmojiPickerProps,
	ChatAsideProps,
	ChatMessageProps,
	StartScreenProps,
	ChatHeaderProps,
	TextInputProps,
	ContextMenuProps,
	AvatarProps,
	SendButtonProps,
	ChatProps,
}
