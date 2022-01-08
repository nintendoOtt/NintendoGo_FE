import React, { useEffect, useState } from 'react'
import axios from 'axios'

import config from '../../payConfig'

const ADMIN_KEY = 'd268a525c0e9dc5ac5b5fea39af316b4'

function Init() {
	const [redirectUri, setRedirectUri] = useState('')
	const { params } = config

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
			<div className="flex justify-center">
				<div style={{ width: '600px' }} className="pt-8">
					<div className="flex justify-center items-center">
						<img
							className="w-6 mr-1"
							src="/img/icon/logo.png"
							alt="logo"
							layout="fill"
						/>
						<div className="logoFont">NintendoGo</div>
					</div>

					<div className="flex justify-center my-4 text-2xl font-medium">
						파티원으로 참여하기
					</div>

					<div
						style={{ backgroundColor: '#eee' }}
						className="relative h-3 rounded-md mb-4"
					>
						{/* 여기 부분어떻게 하는지 모르겠음 */}
					</div>

					<div
						style={{ boxShadow: '3px 3px 10px 0 rgba(0, 0, 0, 0.16)' }}
						className="bg-white rounded-md border"
					>
						<div className="py-4 px-6 border-b border-solid border-gray-100 font-medium text-lg">
							{' '}
							📣 파티 이용료를 안내드립니다!
						</div>

						<div className="py-4 px-6 border-b border-solid border-gray-100">
							<div className="flex justify-between">
								<div className="text-sm line-through text-gray-400">
									닌텐도 이용요금
								</div>
								<div className="text-sm line-through text-gray-400">
									37,900원
								</div>
							</div>

							<div className="flex justify-between">
								<div>NintendoGo로 공유했을때 요금</div>
								<div>4,700원</div>
							</div>
						</div>

						<div className="flex justify-between py-4 px-6 border-b border-solid border-gray-100">
							<div>NintendoGo 수수료</div>
							<div>500원</div>
						</div>

						<div className="py-4 px-6 flex justify-between">
							<div className="text-lg font-medium">총 이용료</div>

							<div className="text-lg font-medium">5,200원</div>
						</div>
					</div>

					<div
						style={{ backgroundColor: '#fee500' }}
						className="flex justify-center mt-4 h-14 rounded-lg"
					>
						<button>
							<a className="flex-1" href={redirectUri}>
								카카오페이로 결제하기
							</a>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Init
