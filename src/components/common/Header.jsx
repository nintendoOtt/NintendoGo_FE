import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { useReactiveVar } from '@apollo/client';
import { loginData } from 'apollo'

import { Button } from 'styles/common'
import MiniProfile from 'components/common/MiniProfile'
import Logo from 'components/common/Logo'

const Header = () => {

	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=49ef17e43b545af9269b7cb417c9db6e&redirect_uri=http://localhost:3000/login&response_type=code`

	const userData = useReactiveVar(loginData);
	console.log(userData)

	return (
		<HeaderContainer>
			<div className="header-box">
				<Logo />
				<Menu>
					<Link to='/myParty' className="menu-item">내 파티</Link>
					<Link to='/' className="menu-item">게임 공유 게시판</Link>
				</Menu>

				{ 
					userData.loginUser ? <MiniProfile img={userData.loginUser.profile_image}/> : 
					<KaKaoLoginBtn>
						<a href={KAKAO_AUTH_URL}>
							<img src={"/img/icon/kakao.png"} alt="kakao" />
							<span>kakao 로그인</span>
						</a>
					</KaKaoLoginBtn> 
				}
				
			</div>
		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.header`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.white};
	border-bottom: 1px solid #f1f3f7;
	padding: 15px 0;
	position: sticky;
	z-index: 10;
	top: 0;
	.header-box {
		margin: 0 auto;
		max-width: 1364px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

const KaKaoLoginBtn = styled(Button)`
	width: auto;
	padding: 8px 10px;
	background-color: #fae100;
	box-sizing: content-box;
	box-shadow: none;
	> a {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
		> img {
			width: 25px;
			height: 25px;
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.small};
			color: #020200;
			font-weight: 500;
		}
	}
`

const Menu = styled.div`
	display: flex;
	gap: 10px;
	.menu-item {
		border-radius: 5px;
		font-size: ${({ theme }) => theme.fontSizes.base};
		padding: 5px 10px;
		color: #333;
		cursor: pointer;
		transition: 0.5s;
		font-weight: 500;
		&:hover {
			background-color: ${({ theme }) => theme.colors.primary};
			color: #eee;
		}
	}
`