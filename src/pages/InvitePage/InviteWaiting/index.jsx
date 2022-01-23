<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

import { Font } from 'styles/common'
import { Container } from './style'


function index() {
    return (
        <Container>
            <div className='topContainer'>
                <div className='topFont'>닌텐도 패밀리 파티원을 초대하고</div>
                <div className='topFont'>서로 할인받자!</div>
            </div>
            
            <div className='mediumContainer'>
                <div>1명만 초대해도 파티장은 <Font>매달 수수료 전액 무료!</Font></div>
                <div>초대받는 파티원은 <Font>매달 수수료 500원 할인 혜택!(990원 - 400원)</Font></div>
            </div>
   
            <div className='bottomContainer'>
                <div className='bottomText'>초대 가능인원: 2명</div>
                <Link className='bottomLink' to='/invite/setting'>변경하기</Link>
            </div>

            <div className='recommendText'>인터넷 커뮤니티 혹인 SNS에도 공유해보세요!</div>

            <div className='btnContainer'>
                <div className='copyBtn'>링크 복사하기</div>
                <a href='/' className='shareBtn'>카카오톡 공유하기</a>
            </div>


            <div className='alertContainer'>
                <div className='alertTop'>안내사항</div>

                <ul className='alerts'>
                    <li className='alert'>· &nbsp;&nbsp;파티생성 후 24시간 안에 초대를 완료해주세요</li>
                    <li className='alert'>· &nbsp;&nbsp;파티원 초대가 안되고 24시간이 지나면 남는 자리에 파티원을 자동으로 매칭받아요</li>
                    <li className='alert'>· &nbsp;&nbsp;초대한 파티원이 전부 탈퇴하면 다음 정산일까지만 혜택이 유지돼요</li>
                </ul>
            </div>
          
        </Container>
    )
=======
import { useMemo } from 'react'
import { WaitingBtn, WaitingCard, WaitingContainer } from './style'

const InviteWaiting = () => {
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
					{noticeList.map(v => (
						<div key={v} className="notice_list">
							<img src="/img/icon/point.png" alt="point" />
							<span>{v}</span>
						</div>
					))}
				</WaitingCard>
			</div>
			<div className="waiting__button_wrapper">
				<WaitingBtn>초대 링크 복사하기</WaitingBtn>
				<WaitingBtn kakao>
					<img src="/img/icon/kakao.png" alt="kakao" />
					카카오톡으로 공유하기
				</WaitingBtn>
			</div>
		</WaitingContainer>
	)
>>>>>>> f5e70e84e7fbb486bef13259052b4419e58eedcd
}

export default InviteWaiting
