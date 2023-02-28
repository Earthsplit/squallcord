import { PathParams } from '../types'

function path(params: PathParams) {
	return `${params.root}${params.link}`
}

const ROOT = '/'

export const PATH = {
	root: ROOT,
	general: {
		app: path({ root: ROOT, link: 'app' }),
	},
}
