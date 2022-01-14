import React from 'react'

import { LinkBtnYes, LinkBtnNo } from 'styles/common'
import { Container } from './style'

function InviteInit() {
  return (
    <Container>
      <div className='imgContainer'>
        <img src='/img/intro/partner.png' alt="partner"/>
      </div>
     
      <div className='pageLogo'>친구를 초대해주세요!</div>

      <div>
        <div className='benefitsContainer'>
          <ul className='benefits'>
            <li className='benefit'>· &nbsp;&nbsp;이런 혜택이 있어요</li>
            <li className='benefit'>· &nbsp;&nbsp;이런 혜택이 있어요</li>
            <li>· &nbsp;&nbsp;이런 혜택이 있어요</li>
          </ul>
        </div>

        <div className='btnContainer'>
            <LinkBtnYes to='/invite/setting' className='btnTop'>초대 설정 하러가기</LinkBtnYes>
            <LinkBtnNo to='/' className='btnBottom'>초대 안하고 시작하기</LinkBtnNo>
        </div>
      </div>
  
      
    </Container> 
  )
}

export default InviteInit
