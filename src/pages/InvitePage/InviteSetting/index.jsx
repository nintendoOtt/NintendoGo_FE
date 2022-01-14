import React, { useState, useCallback } from 'react'

import { LinkBtnYes, Font } from 'styles/common'
import { Container } from './style'

function InviteSetting() {

  const [inviteNum, setInviteNum] = useState(0);

  const plusInviteNum = useCallback(() => {
    setInviteNum(inviteNum+1)
  },[inviteNum])
  
  const minusInviteNum = useCallback(() => {
    if(inviteNum === 0) {
        // eslint-disable-next-line no-useless-return
        return;
    }
    setInviteNum(inviteNum-1)
  },[inviteNum])

  return (
    <Container>
      <div>
        <div className='topText'>초대할 파티원의 수를 지정해 주세요</div>
   
        <div>
            <div className='alertContainer'>
                <div className='howMany'>
                    <div className='howManyText'>초대할 파티원 수</div>
                    <div className='howManyNum'>
                        <button onClick={minusInviteNum} className='minusBtn'>-</button>
                        {inviteNum}명
                        <button onClick={plusInviteNum} className='plusBtn'>+</button>    
                    </div>
                </div>
    

                <ul className='alert'>
                    <li>· &nbsp;&nbsp;파티생성 후 <Font>24시간</Font> 안에 초대를 완료해주세요</li>
                    <li>· &nbsp;&nbsp;초대를 안하고 <Font>24시간</Font>이 지나면 남는 자리에 파티원을 <Font>자동으로 매칭받아요</Font></li>
                    <li>· &nbsp;&nbsp;초대한 파티원이 전부 탈퇴하면 다음 정산일까지만 혜택이 유지돼요</li>
                </ul>
            </div>
        
            <div className='btnContainer'>
                <LinkBtnYes to='/invite/waiting' className='btnTop'>초대 설정 완료</LinkBtnYes>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default InviteSetting 
