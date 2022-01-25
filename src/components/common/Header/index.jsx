import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { loginData } from 'apollo'
import { useReactiveVar } from '@apollo/client'

import MiniProfile from 'components/common/MiniProfile'
import Logo from 'components/common/Logo'
import {
	HeaderContainer,
	HeaderWrapper,
	KaKaoLoginBtn,
	Menu,
	MenuBtn,
	MobileMenu
} from './style'

const Header = () => {
	const [isMenu, setIsMenu] = useState(false)

	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=49ef17e43b545af9269b7cb417c9db6e&redirect_uri=http://localhost:3000/login&response_type=code`
	const userData = useReactiveVar(loginData)

	const isMobile = useMediaQuery({ query: '(max-width:425px)' })

	const onClickMenuBtn = useCallback(() => setIsMenu(prev => !prev), [])

	useEffect(() => {
		if (!isMobile) setIsMenu(false)
	}, [isMobile])

	// 로그인 상태에 따라 분기처리
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
			<HeaderWrapper>
				<div className="header__box">
					<Logo />
					{isMobile ? (
						<div className="header__mobile_menu">
							<MenuBtn
								onClick={onClickMenuBtn}
								className={isMenu ? 'active' : null}
							/>
						</div>
					) : (
						<>
							<Menu>
								<Link to="/myParty" className="header__menu_item">
									내 파티
								</Link>
								<Link to="/" className="header__menu_item">
									게임 공유 게시판
								</Link>
							</Menu>
							{loginMenu}
						</>
					)}
				</div>
			</HeaderWrapper>
			<MobileMenu className={isMenu ? 'active' : null}>
				<div className="menu_wrapper">
					<div className="menu_box">
						<Link to="/myParty" className="header__menu_item">
							내 파티
						</Link>
						<Link to="/" className="header__menu_item">
							게임 공유 게시판
						</Link>
					</div>
					{loginMenu}
				</div>
			</MobileMenu>
		</HeaderContainer>
	)
}

export default Header
