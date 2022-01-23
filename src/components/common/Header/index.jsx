import { Link } from 'react-router-dom'
import { loginData } from 'apollo'
import { useReactiveVar } from '@apollo/client'

import MiniProfile from 'components/common/MiniProfile'
import Logo from 'components/common/Logo'
import { HeaderContainer, KaKaoLoginBtn, Menu } from './style'

const Header = () => {
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=49ef17e43b545af9269b7cb417c9db6e&redirect_uri=http://localhost:3000/login&response_type=code`

	const userData = useReactiveVar(loginData)
	console.log(userData)

	return (
		<HeaderContainer>
			<div className="header-box">
				<Logo />
				<Menu>
					<Link to="/myParty" className="menu-item">
						내 파티
					</Link>
					<Link to="/" className="menu-item">
						게임 공유 게시판
					</Link>
				</Menu>
				{userData.loginUser ? (
					<MiniProfile img={userData.loginUser.profile_image} />
				) : (
					<KaKaoLoginBtn>
						<a href={KAKAO_AUTH_URL}>
							<img src="/img/icon/kakao.png" alt="kakao" />
							<span>kakao 로그인</span>
						</a>
					</KaKaoLoginBtn>
				)}
			</div>
		</HeaderContainer>
	)
}

export default Header
