type ChatProps = {
	socket: Socket
	username: string
	avatar: string
	userCount: number
}

type ChatMessageProps = {
	styles: string
	post: NewPost
	fullMessage: boolean
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

type ContextMenuType = {
	x: number
	y: number
	show: boolean
}

type ContextMenuProps = {
	x: number
	y: number
	handleContextMenuAction: (action: string) => void
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
	onClickOutside: () => void
}

type ChatFormProps = {
	addNewMessage: (e: React.FormEvent) => void
	currentMessage: string | undefined
	setCurrentMessage: React.Dispatch<React.SetStateAction<string | undefined>>
}

type NewPost = {
	id: string | null
	user: string
	avatar: string
	message: string | undefined
	timestamp: number
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

type ChatListProps = {
	posts: NewPost[]
	handleContextMenu: (event: React.MouseEvent) => void
	username: string
}

export {
	PathParams,
	EmojiData,
	NewPost,
	EmojiPickerProps,
	ChatMessageProps,
	StartScreenProps,
	ChatHeaderProps,
	TextInputProps,
	ContextMenuProps,
	ContextMenuType,
	AvatarProps,
	SendButtonProps,
	ChatProps,
	ChatFormProps,
	ChatListProps,
}
