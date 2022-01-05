import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('pages/HomePage'))
const Login = lazy(() => import('pages/LoginPage'))
const Select = lazy(() => import('pages/SelectPage'))
const Guest = lazy(() => import('pages/GuestPage'))
const Host = lazy(() => import('pages/HostPage'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/login', element: <Login /> },
		{ path: '/select', element: <Select /> },
		{ path: '/guest/*', element: <Guest /> },
		{ path: '/host/*', element: <Host /> }
	])
	return routes
}

export default RouterConfig
