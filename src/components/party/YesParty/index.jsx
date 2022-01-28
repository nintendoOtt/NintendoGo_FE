/* eslint-disable no-unused-vars */
import { useMemo, useState } from 'react'
import { PartyBtn, PartyCard, YesPartyContainer } from './style'

const YesParty = () => {
	const [isHost, setIsHost] = useState(true)
	const [me, setMe] = useState('여찬규')

	const dummyUsers = useMemo(
		() => [
			{ id: 1, username: '여찬규', image: 'img/default_profile.png' },
			{ id: 2, username: '김민우', image: 'img/default_profile.png' },
			{ id: 3, username: '임시 닉네임', image: 'img/default_profile.png' },
			{
				id: 4,
				username: '닉네임닉네임닉네임',
				image: 'img/default_profile.png'
			},
			{
				id: 5,
				username: '닉네임닉네임닉네임',
				image: 'img/default_profile.png'
			},
			{
				id: 6,
				username: '닉네임닉네임닉네임',
				image: 'img/default_profile.png'
			},
			{ id: 7, username: null, image: null },
			{ id: 8, username: null, image: null }
		],
		[]
	)

	return (
		<YesPartyContainer>
			<PartyCard>
				<div className="party__title">
					<img src="img/icon/game.png" alt="game icon" />
					<span>{me} 님이 참여중인 파티입니다.</span>
				</div>
				<div className="party__info_grid">
					{dummyUsers.map(
						v =>
							v.username !== null && (
								<div key={v} className="party__info_item">
									<img src={v.image} alt={v.username} />
									<span>{v.username} 님</span>
									{(v.id === 1 || v.username === me) && (
										<div className="badge">
											{v.id === 1 && <p className="host">파티장</p>}
											{v.username === me && <p className="me">나</p>}
										</div>
									)}
								</div>
							)
					)}
				</div>
			</PartyCard>
			{isHost ? (
				<>
					<span className="ishost">초대할 수 있는 인원이 2명 남았어요!</span>
					<div className="party__btn_wrapper">
						<PartyBtn gray>파티원 해제하기</PartyBtn>
						<PartyBtn>
							파티원 초대하기
						</PartyBtn>
					</div>
				</>
			) : (
				<PartyBtn gray>파티 탈퇴하기</PartyBtn>
			)}
		</YesPartyContainer>
	)
}

export default YesParty
