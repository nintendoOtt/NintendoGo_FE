import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('pages/HomePage'))
const Login = lazy(() => import('pages/LoginPage'))
const Select = lazy(() => import('pages/SelectPage'))
const Guest = lazy(() => import('pages/GuestPage'))
const Host = lazy(() => import('pages/HostPage'))
const Party = lazy(() => import('pages/PartyPage'))
const Invite = lazy(() => import('pages/InvitePage'))
const Test = lazy(() => import('pages/TestPage'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/login', element: <Login /> },
		{ path: '/select', element: <Select /> },
		{ path: '/myParty', element: <Party /> },
		{ path: '/guest/*', element: <Guest /> },
		{ path: '/host/*', element: <Host /> },
		{ path: '/invite/*', element: <Invite />},
		{ path: '/test', element: <Test/>}
	])
	return routes
}

export default RouterConfig
