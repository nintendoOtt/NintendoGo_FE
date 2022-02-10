import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Button = styled.button`
	width: 100%;
	height: auto;
	border-radius: 10px;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};
	transition: 0.3s;
	border: none;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	font-family: 'Noto Sans KR';
	cursor: pointer;
	&:hover {
		filter: brightness(80%);
	}
	&:disabled {
		background-color: #ccc;
		cursor: default;
		&:hover {
			filter: brightness(100%);
		}
	}
	transition: 0.3s;
	* {
		transition: 0.3s;
	}
`

export const LinkBtnYes = styled(Link)`
	background-color: #6c5ce7;
	border-radius: 6px;
	color: white;
	text-align: center;
	padding: 10px 0;
	&:hover {
		filter: brightness(80%);
	}
`
export const LinkBtnNo = styled(Link)`
	background-color: white;
	border-radius: 6px;
	color: black;
	text-align: center;
	padding: 10px 0;
	&:hover {
		filter: brightness(80%);
	}
`

export const Font = styled.span`
	color: #6c5ce7;
	font-weight: 700;
`

export const Card = styled.div`
	width: 100%;
	height: auto;
	border-radius: 10px;
	border: 2px solid ${({ theme }) => theme.colors.subColor};
	background-color: ${({ theme }) => theme.colors.baseColor};
	transition: 0.1s;
`

export const Divide = styled.hr`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.subColor};
`

export const Input = styled.input`
	width: 100%;
	height: 40px;
	border: none;
	border-radius: 5px;
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSizes.base};
	outline: 1px solid ${({ theme }) => theme.colors.subColor};
	box-shadow: inset 0 1px 5px 0 rgba(0, 0, 0, 0.1);
	transition: 0.3s;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.textColor};
	&:focus {
		outline: 1px solid ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		height: 30px;
		font-size: 12px;
	}
`
