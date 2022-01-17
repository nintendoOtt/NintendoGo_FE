/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginToken } from 'apollo'

import { LOG_IN_REQUEST } from '../reducers/user'

const LoginPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { logInLoading, logInDone } = useSelector(state => state.user)
	const location = useLocation()
	const code = location.search.substr(6)

	useEffect(() => {
		const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=49ef17e43b545af9269b7cb417c9db6e&redirect_uri=http://localhost:3000/login&code=${code}`
		if (location) {
			axios.post(KAKAO_AUTH_URL).then(res => {
				loginToken(res.data.access_token)
				console.log(res.data)
				dispatch({
					type: LOG_IN_REQUEST,
					data: {
						token: res.data.access_token
					}
				})
			})
		}
	}, [location])

	useEffect(() => {
		if (logInDone) {
			navigate('/')
		}
	}, [logInDone])

	return (
		<div>
			{logInLoading ? (
				<div className="my-40 text-center text-5xl">로그인중입니다...</div>
			) : (
				<div className="my-40 text-center text-5xl">로그인완료</div>
			)}
		</div>
	)
}

export default LoginPage
