import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default (path, next) => {
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		if (location.pathname === `/${path}`) navigate(`/${path}/${next}`)
	}, [location.pathname, navigate, next, path])
}
