/* eslint-disable object-shorthand */
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginData } from 'apollo'

import LoadingSpinner from 'components/common/LoadingSpinner'
import { useQuery } from '@apollo/client'
import { LOGIN_USER } from 'apollo/user'

const LoginPage = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const code = location.search.substr(6)
	const [userData, setUserData] = useState('')

	useEffect(() => {
		if (userData) {
			navigate('/')
		}
	}, [userData])

	function LoginSucceess() {
		const { loading, error, data } = useQuery(LOGIN_USER, {
			variables: { code: code }
		})

		if (loading) return <LoadingSpinner />
		if (error) return <p>Error :(</p>

		if (data) {
			console.log(data)
			loginData(data)
			setUserData(data.loginUser.id)
			return <LoadingSpinner />
		}
	}

	return (
		<div>
			<LoginSucceess />
		</div>
	)
}

export default LoginPage
