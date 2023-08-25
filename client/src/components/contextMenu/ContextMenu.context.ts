import { createContext } from 'react'

export interface ContextMenuItem {
	name: string
	icon: JSX.Element
	onClick: () => void
}

interface ContextMenuModel {
	setContextMenu: (
		items: ContextMenuItem[],
		visible: boolean,
		position: number[]
	) => void
}

export const ContextMenu = createContext<ContextMenuModel>({
	setContextMenu: () => {},
})
