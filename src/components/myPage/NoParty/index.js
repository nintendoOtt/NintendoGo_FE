import React from 'react';
import { IoIosArrowForward } from 'react-icons/io'

import { Container } from './style'

function Btns() {
  const Btn = [
    { title:"결제관리", link: "/"},
    { title:"정산계좌 관리", link: "/"},
    { title:"결제관리", link: "/"},
    { title:"결제관리", link: "/"}
  ]

  return ( 
    Btn.map((v) => (
      <div className='btn'>
        <div>{v.title}</div>
        <IoIosArrowForward />
      </div>
    ))
  )
 
}


function NoParty() {
  return <Container>
      <div className='topText'>
        <span>
          아직 이용중인
          <br/>
          파티가 없어요
        </span>
      </div>
 
      <div className='middleText'>
        <span>
          닌텐도 패밀리 계정을 사람들과 공유해서
          <br />
          더욱 저렴한 가격에 닌텐도 스위치를 이용해 보세요
        </span>
      </div>


      <div className='btnContainer'>
          <Btns />
          {/* <div className='btn'>
            <div>결제관리</div>
            <IoIosArrowForward />
          </div>
          <div>정산계좌 관리</div>
          <div>문의 및 상담</div>
          <div>로그아웃</div> */}
      </div>
  </Container>;
}

export default NoParty;
