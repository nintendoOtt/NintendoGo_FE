import styled from '@emotion/styled'
import { Button } from 'styles/common'

export const HeaderContainer = styled.header`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.white};
	border-bottom: 1px solid #f1f3f7;
	padding: 15px 0;
	position: sticky;
	z-index: 10;
	top: 0;
	.header-box {
		width: 70%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	@media ${({ theme }) => theme.device.tablet} {
		padding: 10px 0;
		.header-box {
			width: 85%;
		}
	}
`

export const KaKaoLoginBtn = styled(Button)`
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

export const Menu = styled.div`
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
