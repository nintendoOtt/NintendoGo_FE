import { MatchingContainer } from './style'

const MatchingInfo = () => (
	<MatchingContainer>
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
	</MatchingContainer>
)

export default MatchingInfo
