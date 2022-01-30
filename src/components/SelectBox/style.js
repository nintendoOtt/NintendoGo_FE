import styled from '@emotion/styled'
import { Card } from 'styles/common'

export const SelectCard = styled(Card)`
	width: 100%;
	height: 550px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	border: 3px solid #fff;
	transition: 0.2s ease-in-out;
	border: 5px solid ${({ theme }) => theme.colors.white};
	> img {
		width: 80px;
		height: 80px;
	}
	.select_box__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			font-weight: 500;
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.base};
			font-weight: 300;
		}
	}
	> button {
		width: 100%;
		color: ${({ theme }) => theme.colors.primary};
		font-size: ${({ theme }) => theme.fontSizes.xxl};
		border: 3px solid ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
		font-weight: 600;
		padding: 12px 0;
		transition: 0.5s;
		cursor: pointer;
		&:hover {
			filter: brightness(80%);
		}
	}
	&:hover {
		border: 5px solid ${({ theme }) => theme.colors.primary};
		> button {
			color: ${({ theme }) => theme.colors.white};
			background-color: ${({ theme }) => theme.colors.primary};
		}
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: auto;
		height: 250px;
		gap: 12px;
		> img {
			width: 70px;
			height: 70px;
		}
		.select_box__content {
			gap: 8px;
		}
		> button {
			padding: 8px 0;
			border: 2px solid ${({ theme }) => theme.colors.primary};
		}
		&:hover {
			border: 3px solid ${({ theme }) => theme.colors.primary};
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		height: 200px;
		> img {
			width: 60px;
			height: 60px;
		}
		> button {
			border: 1px solid ${({ theme }) => theme.colors.primary};
		}
		&:hover {
			border: 2px solid ${({ theme }) => theme.colors.primary};
		}
	}
`
