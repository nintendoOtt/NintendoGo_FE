import styled from '@emotion/styled'
import { Button } from 'styles/common'

export const SelectContainer = styled.div`
	width: 100%;
	padding-top: 30px;
	.select__title {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding-bottom: 30px;
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			color: ${({ theme }) => theme.colors.primary};
			font-weight: 600;
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.xl};
			color: #777;
		}
	}
	.select__content {
		display: flex;
		gap: 16px;
		padding-bottom: 20px;
	}
	@media ${({ theme }) => theme.device.tablet} {
		padding-top: 20px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
		.select__title {
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
			}
		}
		.select__content {
			flex-direction: column;
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		padding-top: 10px;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		width: 90%;
	}
`

export const CancelButton = styled(Button)`
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
	font-weight: 500;
	padding: 12px 0;
	background-color: #eee;
	color: #000;
	@media ${({ theme }) => theme.device.tablet} {
		padding: 8px 0;
	}
`
