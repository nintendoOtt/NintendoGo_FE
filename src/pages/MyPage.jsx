import Header from 'components/common/Header'

import MyPageLayout from 'components/layout/MyPageLayout'
import NoParty from 'components/myPage/NoParty'

function MyPage() {
	console.log( window.sessionStorage.getItem("nintendoEmail"))
	return <MyPageLayout>마이페이지</MyPageLayout>

}

export default MyPage
