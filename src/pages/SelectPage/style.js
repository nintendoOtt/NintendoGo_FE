import styled from '@emotion/styled'
import { Button } from 'styles/common'

export const SelectContainer = styled.div`
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
`

export const CancelButton = styled(Button)`
	font-size: ${({ theme }) => theme.fontSizes.xxxl};
	font-weight: 500;
	padding: 12px 0;
	background-color: #eee;
	color: #000;
`
