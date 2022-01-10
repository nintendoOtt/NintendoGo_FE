import { useCallback } from 'react'
import styled from '@emotion/styled'

const FooterContainer = styled.footer`
	width: 85.4%;
	height: 65px;
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 10px 10px 0 0;
	padding: 20px;
	font-size: ${({ theme }) => theme.fontSizes.lg};
	border: 1px solid #f1f3f7;
	color: #777;
	margin: 0 auto;
`

const Footer = () => {
	const DateYear = useCallback(() => new Date().getFullYear(), [])()

	return (
		<FooterContainer>
			<span>Copyright &copy; {DateYear}. NuntendoGo All Rights Reserved.</span>
		</FooterContainer>
	)
}

export default Footer
