import { FC } from 'react'
import { ContextMenuProps } from '../../types'
import CONTEXT_MENU from '../../data/index'

// TODO: add actions

const ContextMenu: FC<ContextMenuProps> = ({
	x,
	y,
	handleContextMenuAction,
}) => {
	return (
		<div
			className='absolute flex flex-col items-center rounded bg-slate-700'
			style={{ top: `${y}px`, left: `${x}px` }}
		>
			<ul className='flex flex-col p-2'>
				{CONTEXT_MENU.map((item, index) => (
					<li
						className='p-2 hover:rounded hover:bg-slate-500'
						key={index}
						onClick={() => handleContextMenuAction(item.title)}
					>
						<div className='flex items-center gap-2 '>
							{item.icon}
							{item.title}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ContextMenu
