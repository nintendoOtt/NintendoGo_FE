import styled from '@emotion/styled'

export const Button = styled.button`
	width: 100%;
	height: auto;
	border-radius: 10px;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};
	box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
	transition: 0.5s;
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
`
