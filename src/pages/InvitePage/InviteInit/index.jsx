import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ButtonContainer, BenefitsContainer } from './style'

function InviteInit() {
  return (
    <Container>
      <div className='pageLogo'>파티원 초대하기</div>

      <BenefitsContainer>
        <ul>
          <li>이런 혜택이 있어요</li>
          <li>이런 혜택이 있어요</li>
          <li>이런 혜택이 있어요</li>
          <li>이런 혜택이 있어요</li>
        </ul>
      </BenefitsContainer>

      <ButtonContainer>
          <Link to='/'>초대 설정 하러가기</Link>
          <Link to='/'>초대 안하고 시작하기</Link>
      </ButtonContainer>
      
    </Container> 
  )
}

export default InviteInit
