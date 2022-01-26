/* eslint-disable no-script-url */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useCallback, useState, useEffect } from 'react'

function TestPage() {

  const params = {
    container: '#kakao-link-btn',
    templateId: 69577,
    templateArgs: {
      'title': '제목 영역입니다.',
      'description': '설명 영역입니다.'
    }
  }
  
  useEffect(() => {
    window.Kakao.init('a278d9d814b69465568fd897864b3df9')
    window.Kakao.Link.createCustomButton(params);
  },[])

  const send = useCallback(() => {
    window.Kakao.Link.createCustomButton(params);
  },[])
  

  return (
    <div>
      <button>클릭</button>

      <button id="kakao-link-btn" onClick={send}>
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt="카카오링크 보내기 버튼"
        />
      </button>
    </div>
  )
}

export default TestPage
