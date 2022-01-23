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
}

export default index
