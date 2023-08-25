import { useContext } from 'react'
import { ContextMenu } from '../components/contextMenu/ContextMenu.context'
export const useContextMenu = () => useContext(ContextMenu)
