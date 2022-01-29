import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Button = styled.button`
	width: 100%;
	height: auto;
	border-radius: 10px;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};
	box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
	transition: 0.5s;
	border: none;
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
`

export const LinkBtnYes = styled(Link)`
	background-color: #6c5ce7;
	border-radius: 6px;
	box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
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
	box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
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
	box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
	background-color: ${({ theme }) => theme.colors.white};
`

export const Divide = styled.hr`
	width: 100%;
	border: 1px solid #f8f9fd;
`

export const Input = styled.input`
	width: 100%;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.colors.gray_w};
	border-radius: 5px;
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSizes.base};
	outline: 1px solid ${({ theme }) => theme.colors.gray_w};
	transition: 0.5s;
	&:focus {
		outline: 1px solid ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		height: 30px;
		font-size: 12px;
	}
`
