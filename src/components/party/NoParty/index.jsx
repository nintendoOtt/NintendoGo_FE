import { useState } from 'react'
import { MakePartyBtn, NoPartyContainer } from './style'

const NoParty = () => {
	// eslint-disable-next-line no-unused-vars
	const [userName, setUserName] = useState('김민우')

	return (
		<NoPartyContainer>
			<div className="party__header">
				<h1>
					{userName}님, <br /> 아직 가입한 파티가 없어요!
				</h1>
				<span>지금 NuntendoGo로 파티에 참가해보세요!</span>
			</div>
			<div className="party__content">
				<img src="/img/intro/partner.png" alt="partner" layout="fill" />
				<MakePartyBtn>파티만들러 가기</MakePartyBtn>
			</div>
		</NoPartyContainer>
	)
}

export default NoParty
