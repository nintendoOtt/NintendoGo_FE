import styled from '@emotion/styled'
import { Button } from 'styles/common'

export const IntroContainer = styled.div`
	width: 65%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;
	margin: 100px auto 0;
	@media ${({ theme }) => theme.device.NoteBook} {
		width: 100%;
		gap: 30px;
		margin-top: 100px;
	}
	@media ${({ theme }) => theme.device.tablet} {
		margin-top: 50px;
		flex-direction: column-reverse;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		margin-top: 0;
	}
	.content-left {
		width: 40%;
		display: flex;
		flex-direction: column;
		gap: 20px;
		> h1 {
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
			font-weight: 600;
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.xl};
		}
		@media ${({ theme }) => theme.device.tablet} {
			width: 100%;
			gap: 15px;
			align-items: center;
			> h1 {
				text-align: center;
			}
		}
	}
	.content-right {
		> img {
			max-width: 100%;
			margin: 0 !important;
		}
		@media ${({ theme }) => theme.device.tablet} {
			width: 300px;
		}
		@media ${({ theme }) => theme.device.mobileL} {
			width: 200px;
		}
	}
`

export const IntroButton = styled(Button)`
	width: 200px;
	padding: 15px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	color: white;
	> span {
		font-size: ${({ theme }) => theme.fontSizes.xl};
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: auto;
		padding: 10px 15px;
	}
`
