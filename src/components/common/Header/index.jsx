import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { CgMenuGridR } from 'react-icons/cg'
import { loginData } from 'apollo'
import { useReactiveVar } from '@apollo/client'

import MiniProfile from 'components/common/MiniProfile'
import Logo from 'components/common/Logo'
import { HeaderContainer, KaKaoLoginBtn, Menu } from './style'

const Header = () => {
	const [isMenu, setIsMenu] = useState(true)

	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=49ef17e43b545af9269b7cb417c9db6e&redirect_uri=http://localhost:3000/login&response_type=code`
	const userData = useReactiveVar(loginData)

	const isMobile = useMediaQuery({ query: '(max-width:425px)' })

	const onClickToggleMenu = useCallback(() => setIsMenu(prev => !prev), [])

	// 로그인 분기 처리 컴포넌트
	const loginMenu = userData.loginUser ? (
		<MiniProfile img={userData.loginUser.profile_image} />
	) : (
		<KaKaoLoginBtn>
			<a href={KAKAO_AUTH_URL}>
				<img src="/img/icon/kakao.png" alt="kakao" />
				<span>kakao 로그인</span>
			</a>
		</KaKaoLoginBtn>
	)

	return (
		<HeaderContainer>
			<div className="header-box">
				<Logo />
				{isMobile ? (
					<div onClick={onClickToggleMenu}>
						<CgMenuGridR size={25} fill={isMenu && '#6C5CE7'} />
					</div>
				) : (
					<>
						<Menu>
							<Link to="/myParty" className="menu-item">
								내 파티
							</Link>
							<Link to="/" className="menu-item">
								게임 공유 게시판
							</Link>
						</Menu>
						{loginMenu}
					</>
				)}
			</div>
		</HeaderContainer>
	)
}

export default Header
