import styled from '@emotion/styled'
import { useCallback } from 'react'

const FooterContainer = styled.footer`
	width: 85.4%;
	height: 65px;
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 10px 10px 0 0;
	padding: 20px;
	font-size: ${({ theme }) => theme.fontSizes.lg};
	box-shadow: 5px 0 10px ${({ theme }) => theme.colors.gray_w};
	color: #777;
	margin: 0 auto;
	/* position: absolute;
	bottom: 0px;
	left: 50%;
	transform: translateX(-50%); */
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
