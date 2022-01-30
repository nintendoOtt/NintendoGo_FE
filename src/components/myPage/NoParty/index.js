import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'

import { Container } from './style'

function Btns() {
  const Btn = [
    { title:"💳 결제 관리", link: "/"},
    { title:"💵 정산계좌 관리", link: "/"},
    { title:"💬 문의·상담", link: "/"},
  ]

  return ( 
    Btn.map((v) => (
      <Link to={v.link} className='btn'>
        <div>{v.title}</div>
        <IoIosArrowForward className='arrow'/>
      </Link>
    ))
  )
}


function NoParty() {

  // const userData = useReactiveVar(loginData)
  // const [logoutHandler, { loading, error, data }] = useMutation(LOGOUT_USER, {
	// 	variables: { id: userData.loginUser.id }
	// })

	// useEffect(() => {
	// 	if (data) {
	// 		loginData({})
	// 	}
	// }, [data])

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
          <button className='logout'>
            로그아웃
          </button>
      </div>
  </Container>;
}

export default NoParty;
