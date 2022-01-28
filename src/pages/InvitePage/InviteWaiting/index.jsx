/* eslint-disable no-unused-vars */
import { useMemo, useEffect, useCallback } from 'react'
import { useReactiveVar } from '@apollo/client'
import { loginData } from 'apollo'

import { WaitingBtn, WaitingCard, WaitingContainer } from './style'

const InviteWaiting = () => {
	const userData = useReactiveVar(loginData)
	const tempPartyId = '123'
	const inviteUrl = `http://localhost:3000/guest/init/${tempPartyId}`

	const tempeleteConfig = {
		container: '#kakao-invite-btn',
		objectType: 'feed',
		content: {
			title: '닌텐도 패밀리를 사람들과 함께',
			description: 'nintendoGo를 이용한 저렴한 가격으로 닌텐도 패밀리 이용하기',
			imageUrl:
				'https://store.nintendo.co.kr/media/catalog/product/cache/8e3c84988db1fdb90470f4d01453d879/4/b/4b541d638e46b4a19131810149e282631c7d854c3740a0387a58303cfee054cc.jpg',
			link: {
				webUrl: 'http://localhost:3000/'
			}
		},
		itemContent: {
			profileText: 'nintendoGo',
			profileImageUrl:
				'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png'
		},
		buttons: [
			{
				title: '웹으로 이동',
				link: {
					webUrl: inviteUrl
				}
			}
		]
	}

	useEffect(() => {
		window.Kakao.init('a278d9d814b69465568fd897864b3df9')
		window.Kakao.Link.createDefaultButton(tempeleteConfig)
	}, [window.Kakao])

	const send = useCallback(() => {
		window.Kakao.Link.createDefaultButton(tempeleteConfig)
	}, [])

	const noticeList = useMemo(
		() => [
			'파티생성 후 24시간 안에 초대를 완료해주세요',
			'파티원 초대가 안되고 24시간이 지나면 남는 자리에 파티원을 자동으로 매칭받아요',
			'초대한 파티원이 전부 탈퇴하면 다음 정산일까지만 혜택이 유지돼요'
		],
		[]
	)

	return (
		<WaitingContainer>
			<h1 className="waiting__title">
				닌텐도 패밀리 파티원을 초대하고
				<br /> 서로 할인받자!
			</h1>
			<span className="waiting__content_top">
				1명만 초대해도 파티장은&nbsp;
				<span className="primary">매달 수수료 전액 무료!</span>
				<br />
				초대받는 파티원은&nbsp;
				<span className="primary">
					매달 수수료 500원 할인 해택!(990원 - 400원)
				</span>
			</span>
			<div className="waiting__content_bottom">
				<div className="content_bottom_header">
					<span>초대 가능인원: 2명</span>
					<button>변경하기</button>
				</div>
				<span>인터넷 커뮤니티 혹은 SNS에도 공유해보세요!</span>
			</div>
			<div className="waiting__notice_wrapper">
				<WaitingCard>
					<h2 className="notice_title">안내사항</h2>
					{noticeList.map((v, i) => (
						<div key={i} className="notice_list">
							<img src="/img/icon/point.png" alt="point" />
							<span>{v}</span>
						</div>
					))}
				</WaitingCard>
			</div>
			<div className="waiting__button_wrapper">
				<WaitingBtn onClick={() => navigator.clipboard.writeText(inviteUrl)}>
					초대 링크 복사하기
				</WaitingBtn>
				<WaitingBtn kakao onClick={send} id="kakao-invite-btn">
					<img src="/img/icon/kakao.png" alt="kakao" />
					카카오톡으로 공유하기
				</WaitingBtn>
			</div>
		</WaitingContainer>
	)
}

export default InviteWaiting
