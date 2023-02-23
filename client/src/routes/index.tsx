import {
	createBrowserRouter,
	isRouteErrorResponse,
	useRouteError,
	RouterProvider,
} from 'react-router-dom'
import App from '../App'

function ErrorPage() {
	let error = useRouteError()

	if (isRouteErrorResponse(error)) {
		return (
			<div className='flex h-screen items-center justify-center text-lg'>
				{error.status} {error.statusText}
			</div>
		)
	}

	return (
		<div className='flex h-screen items-center justify-center text-lg'>
			Unknown Error
		</div>
	)
}

export default function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
		},
	])
	return <RouterProvider router={router} />
}
