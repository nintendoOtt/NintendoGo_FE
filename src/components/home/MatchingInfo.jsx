import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
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
		}
	}
`

const MatchingInfo = () => (
	<Container>
		<span className="matching-header">
			<span>NintendoGo</span> 매칭 현황 입니다!
		</span>
		<img src="/img/intro/partner.png" alt="partner" />
		<div className="matching-data">
			<div className="data-box">
				<h2>30명</h2>
				<span>최근 일일 매칭 현황</span>
			</div>
			<div className="data-box">
				<h2>500명</h2>
				<span>최근 일주일 매칭 현황</span>
			</div>
			<div className="data-box">
				<h2>3,500명</h2>
				<span>최근 한달 매칭 현황</span>
			</div>
		</div>
	</Container>
)

export default MatchingInfo
