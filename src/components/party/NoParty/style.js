import styled from '@emotion/styled'
import { Button } from 'styles/common'

export const NoPartyContainer = styled.div`
	padding-top: 80px;
	width: 35%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 50px;
	.party__header {
		> h1 {
			font-size: ${({ theme }) => theme.fontSizes.big};
			font-weight: 700;
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.xl};
			font-weight: 100;
			color: ${({ theme }) => theme.colors.gray};
		}
	}
	.party__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 50px;
		> img {
			width: 40%;
		}
	}
`

export const MakePartyBtn = styled(Button)`
	width: 100%;
	padding: 10px 0;
	border-radius: 5px;
	font-weight: 600;
	font-size: ${({ theme }) => theme.fontSizes.xl};
`
