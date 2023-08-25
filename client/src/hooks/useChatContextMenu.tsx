import { useContextMenu } from './useContextMenu'
import { BiCopy } from '@react-icons/all-files/bi/BiCopy'
import { BiTrash } from '@react-icons/all-files/bi/BiTrash'
import { useRef, useCallback } from 'react'

const ICON_SIZE = 17

interface ChatContextMenuProps {
	onPostDelete: (
		postId: string | null,
		postUserName: string | undefined
	) => void
}

const useChatContextMenu = ({ onPostDelete }: ChatContextMenuProps) => {
	// Create a reference to the current post event target
	const postEventRef = useRef<EventTarget | null>(null)
	const { setContextMenu } = useContextMenu()

	const onContextMenuClose = useCallback(() => {
		// Hide the context menu
		setContextMenu(contextMenu, false, [0, 0])
	}, [setContextMenu])

	const handleCopy = useCallback(() => {
		// Get the text content of the post and copy it to the clipboard
		let postText = (postEventRef.current as HTMLElement).querySelector(
			'span[data-message]'
		)?.textContent as string

		if (postText) {
			navigator.clipboard.writeText(postText).catch(error => {
				console.error('Failed to copy text: ', error)
			})
		}

		// Close the context menu
		onContextMenuClose()
	}, [onContextMenuClose])

	const handleDelete = useCallback(() => {
		let postId = (postEventRef.current as HTMLElement)?.getAttribute('data-key')
		let postUserName = (postEventRef.current as HTMLElement).querySelector(
			'div[data-user]'
		)?.textContent as string

		// Call the onPostDelete function with the post ID
		if (postId) {
			onPostDelete(postId, postUserName)
		}

		// Close the context menu
		onContextMenuClose()
	}, [onPostDelete, onContextMenuClose])

	// Context menu items
	const contextMenu = [
		{
			name: 'Copy',
			icon: <BiCopy size={ICON_SIZE} />,
			onClick: handleCopy,
		},
		{
			name: 'Delete',
			icon: <BiTrash size={ICON_SIZE} />,
			onClick: handleDelete,
		},
	]

	const handleContextMenu = (event: React.MouseEvent) => {
		event.preventDefault()

		const { clientX, clientY } = event
		postEventRef.current = event.target

		// Set the context menu to be visible
		setContextMenu(contextMenu, true, [clientX, clientY])
	}

	return { handleContextMenu, onContextMenuClose }
}

export default useChatContextMenu
