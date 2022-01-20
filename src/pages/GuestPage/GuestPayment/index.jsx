/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import config from 'payConfig'
import { Divide } from 'styles/common'
import { InitCard, KaKaoButton } from './style'

const ADMIN_KEY = 'd268a525c0e9dc5ac5b5fea39af316b4'

function GuestPayment() {

	const { params } = config
	console.log(params)
	console.log(config.params)
	const [redirectUri, setRedirectUri] = useState("")

	useEffect(() => {

		const getUri = async () => {
			const res = await axios.post('/v1/payment/ready', null, {
				params,
				headers: {
					Authorization: `KakaoAK ${ADMIN_KEY}`,
					'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
				}
			})
      	localStorage.setItem('tid', res.data.tid)
			setRedirectUri(res.data.next_redirect_pc_url)
		}
		getUri()
	}, [])

  return (
    <>
			<InitCard>
				<div className="init-title">
					<img src="/img/icon/speaker.png" alt="speaker" />
					<h2>파티 이용료를 안내드립니다!</h2>
				</div>
				<Divide />
				<div className="init-content">
					<div className="init-content-item base">
						<span>파티 이용료를 안내드립니다!</span>
						<span>30,000원</span>
					</div>
					<div className="init-content-item xl">
						<span>파티 이용료를 안내드립니다!</span>
						<span>10,000원</span>
					</div>
				</div>
				<Divide />
				<div className="init-content">
					<div className="init-content-item base">
						<span>파티 수수료를 안내드립니다!</span>
						<span>1,000원</span>
					</div>
					<div className="init-content-item xl">
						<span>파티 수수료를 안내드립니다!</span>
						<span>500원</span>
					</div>
				</div>
				<Divide />
				<div className="init-footer">
					<h2>총 이용료</h2>
					<span>10,500원</span>
				</div>
			</InitCard>
			<KaKaoButton >
				<a href={redirectUri}>
					<div className='payFont'>카카오페이로 결제하기</div>
				</a>
			</KaKaoButton>
		</>
  )
}

export default GuestPayment
