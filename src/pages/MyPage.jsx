import React from 'react'

import MyPageLayout from 'components/layout/MyPageLayout'

function MyPage() {
	console.log( window.sessionStorage.getItem("nintendoEmail"))
	return <MyPageLayout>마이페이지</MyPageLayout>
}

export default MyPage
