import { FC, PropsWithChildren, useCallback, useState } from 'react'
import { ContextMenuItem, ContextMenu } from './ContextMenu.context'

export const ContextMenuProvider: FC<PropsWithChildren<{}>> = ({
	children,
}) => {
	const [contextMenuItems, setContextMenuItems] = useState<ContextMenuItem[]>(
		[]
	)
	const [position, setPosition] = useState<number[]>([])
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const setContextMenu = useCallback(
		(items: ContextMenuItem[], visible: boolean, position: number[]) => {
			setContextMenuItems(items)
			setPosition(position)
			setIsOpen(visible)
		},
		[]
	)

	return (
		<ContextMenu.Provider value={{ setContextMenu }}>
			<ul
				className={`${
					isOpen ? 'absolute z-[10] rounded bg-slate-700' : 'hidden'
				}`}
				style={{ left: `${position[0]}px`, top: `${position[1]}px` }}
			>
				{contextMenuItems.map(item => (
					<li
						className='m-1 flex items-center gap-1 p-2 text-[14px] text-white hover:rounded hover:bg-slate-500'
						key={item.name}
						onClick={item.onClick}
					>
						{item.icon}
						{item.name}
					</li>
				))}
			</ul>

			{children}
		</ContextMenu.Provider>
	)
}
