import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import styled from '@emotion/styled'

const FooterContainer = styled.footer`
	width: 85%;
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.baseColor};
	border-radius: 10px 10px 0 0;
	padding: 20px;
	font-size: 16px;
	font-weight: 200;
	border: 1px solid ${({ theme }) => theme.colors.subColor};
	color: ${({ theme }) => theme.colors.textColor};
	margin: 0 auto;
	position: ${({ baseHeight }) => baseHeight && 'absolute'};
	bottom: ${({ baseHeight }) => baseHeight && 0};
	left: ${({ baseHeight }) => baseHeight && 0};
	right: ${({ baseHeight }) => baseHeight && 0};
	transition: 0.3s;
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 13px;
	}
`

const Footer = () => {
	const location = useLocation()

	const baseHeight = useCallback(() => {
		if (location.pathname !== '/') return true
		return false
	}, [location])()

	const DateYear = useCallback(() => new Date().getFullYear(), [])()

	return (
		<FooterContainer baseHeight={baseHeight}>
			<span>Copyright &copy; {DateYear}. NuntendoGo All Rights Reserved.</span>
		</FooterContainer>
	)
}

export default Footer
