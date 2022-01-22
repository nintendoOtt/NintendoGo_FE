import styled from '@emotion/styled'
import { Button, Card } from 'styles/common'

export const WaitingContainer = styled.div`
	width: 35%;
	margin: 0 auto;
	padding-top: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	text-align: center;
	.waiting__title {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		font-weight: 600;
	}
	.waiting__content_top {
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: ${({ theme }) => theme.colors.gray};
		.primary {
			color: ${({ theme }) => theme.colors.primary};
			font-weight: 600;
		}
	}
	.waiting__content_bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: ${({ theme }) => theme.colors.gray};
		font-size: ${({ theme }) => theme.fontSizes.base};
		.content_bottom_header {
			display: flex;
			gap: 10px;
			font-weight: 600;
			color: ${({ theme }) => theme.colors.gray_b};
			> button {
				color: ${({ theme }) => theme.colors.primary};
				text-decoration: underline;
				transition: 0.5s;
				&:hover {
					filter: brightness(50%);
				}
			}
		}
	}
	.waiting__notice_wrapper {
		width: 100%;
	}
	.waiting__button_wrapper {
		width: 100%;
		display: flex;
		gap: 16px;
	}
`

export const WaitingCard = styled(Card)`
	padding: 20px;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 10px;
	.notice_title {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		font-weight: 600;
	}
	.notice_list {
		display: flex;
		align-items: center;
		gap: 5px;
	}
`

export const WaitingBtn = styled(Button)`
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSizes.base};
	font-weight: 600;
	display: ${({ kakao }) => kakao && 'flex'};
	justify-content: ${({ kakao }) => kakao && 'center'};
	gap: ${({ kakao }) => kakao && '10px'};
	align-items: ${({ kakao }) => kakao && 'center'};
	background-color: ${({ kakao }) => kakao && '#fae100'};
	color: ${({ kakao }) => kakao && '#020200'};
`
