/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {

	const location = useLocation();
	const code = location.search.substr(6);
	
	useEffect(() => {
		const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=49ef17e43b545af9269b7cb417c9db6e&redirect_uri=http://localhost:3000/login&code=${code}`
		if (location) {
			axios.post(KAKAO_AUTH_URL).then(res => {
				console.log(res.data.access_token)
			})
		}
	}, [location])

	return (
		<div>
			<h1>로그인 성공</h1>
		</div>
	)
}

export default LoginPage;