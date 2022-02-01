import styled from '@emotion/styled'
import { Button } from 'styles/common'

export const HeaderContainer = styled.header`
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 10;
`

export const HeaderWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.baseColor};
	border-bottom: 1px solid ${({ theme }) => theme.colors.subColor};
	padding: 15px 0;
	position: relative;
	z-index: 2;
	transition: 0.3s;
	.header__box {
		width: 70%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	@media ${({ theme }) => theme.device.tablet} {
		padding: 10px 0;
		.header__box {
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
	@media ${({ theme }) => theme.device.mobileL} {
		border-radius: 5px;
		> a {
			> img {
				width: 15px;
				height: 15px;
			}
		}
	}
`

export const Menu = styled.div`
	display: flex;
	gap: 5px;
	.header__menu_item {
		border-radius: 5px;
		font-size: ${({ theme }) => theme.fontSizes.base};
		padding: 5px 10px;
		color: ${({ theme }) => theme.colors.textColor};
		cursor: pointer;
		transition: 0.5s;
		font-weight: 500;
		&:hover {
			background-color: ${({ theme }) => theme.colors.primary};
			color: #eee;
		}
	}
`

export const MobileMenu = styled.div`
	position: relative;
	z-index: 1;
	background-color: ${({ theme }) => theme.colors.baseColor};
	border-bottom: 1px solid ${({ theme }) => theme.colors.subColor};
	padding: 10px 0;
	transform: translateY(-50px);
	opacity: 0;
	transition: 0.3s;
	&.active {
		opacity: 1;
		transform: translateY(0px);
	}
	.menu_wrapper {
		width: 85%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.menu_box {
			display: flex;
			gap: 10px;
			font-size: 12px;
		}
	}
`

export const MenuBtn = styled.div`
	position: relative;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&::before {
		content: '';
		position: absolute;
		width: 25px;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.textColor};
		transition: 0.2s;
		transform: translateY(-8px);
		box-shadow: 0 8px 0 ${({ theme }) => theme.colors.textColor};
	}
	&::after {
		content: '';
		position: absolute;
		width: 25px;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.textColor};
		transition: 0.2s;
		transform: translateY(8px);
	}
	&.active {
		&::before {
			content: '';
			background-color: ${({ theme }) => theme.colors.primary};
			box-shadow: 0 0px 0 ${({ theme }) => theme.colors.primary};
			transform: translateY(0) rotate(45deg);
		}
		&::after {
			content: '';
			background-color: ${({ theme }) => theme.colors.primary};
			transform: translateY(0) rotate(-45deg);
		}
	}
`
