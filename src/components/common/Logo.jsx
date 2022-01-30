import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		filter: brightness(60%);
	}
	> img {
		width: 25px;
		height: 25px;
	}
	> span {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		color: ${({ theme }) => theme.colors.primary};
		font-family: 'Product Sans', sans-serif;
		font-weight: 600;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		> img {
			width: 18px;
			height: 18px;
		}
	}
`

const Logo = () => {
	const navigate = useNavigate()
	const onClickToHomePage = useCallback(() => navigate('/'), [navigate])

	return (
		<LogoWrapper>
			<img src="/img/icon/logo.png" alt="logo" />
			<span onClick={onClickToHomePage}>NintendoGo</span>
		</LogoWrapper>
	)
}

export default Logo
