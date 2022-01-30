import styled from '@emotion/styled'

export const MatchingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.matching-header {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		color: ${({ theme }) => theme.colors.secondary};
		font-weight: 500;
		margin-bottom: 10px;
		> span {
			color: ${({ theme }) => theme.colors.primary};
			font-weight: 600;
		}
	}
	.matching-data {
		display: flex;
		gap: 150px;
		padding: 100px 0;
		.data-box {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.titleSize};
				font-weight: 500;
			}
			> span {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				color: #777;
			}
			@media ${({ theme }) => theme.device.tablet} {
				flex-direction: row-reverse;
			}
		}
		@media ${({ theme }) => theme.device.tabletL} {
			gap: 50px;
			padding: 50px 0 80px;
		}
		@media ${({ theme }) => theme.device.tablet} {
			flex-direction: column;
			align-items: center;
			gap: 15px;
			padding: 30px 0 50px;
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		> img {
			width: 180px;
		}
	}
`
