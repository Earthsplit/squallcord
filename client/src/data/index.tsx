import { BiEditAlt } from 'react-icons/bi'
import { BiCopy } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

type ContextMenu = {
	icon: JSX.Element
	title: string
}

const CONTEXT_MENU: ContextMenu[] = [
	{
		icon: <BiEditAlt size={17} />,
		title: 'Edit',
	},
	{
		icon: <BiCopy size={17} />,
		title: 'Copy',
	},
	{
		icon: <MdDeleteOutline size={17} />,
		title: 'Delete',
	},
]

export default CONTEXT_MENU
