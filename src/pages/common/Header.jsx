/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom'

const Header = () => {
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=49ef17e43b545af9269b7cb417c9db6e&redirect_uri=http://localhost:3000/login&response_type=code`

	return (
		<div className="border shadow-md bg-white">
			<div className="flex items-center justify-between py-3 px-3 max-w-6xl xl:mx-auto">
				{/* left (logo) */}
				<div className="relative w-24 flex">
					{/* <Image src="/logo.png" alt="logo" layout='fill'/> */}
					<button>
						<Link to="/">
							<div className="logoFont font-serif">Nintendo</div>
						</Link>
					</button>
				</div>

				{/* middle */}
				<div className="hidden lg:flex">
					<div className="mr-4 linkFont">My Party</div>
					<div className="ml-4 linkFont">게임 공유 게시판</div>
				</div>

				{/* right */}
				<button type="button" className="relative w-32 h-8">
					<a href={KAKAO_AUTH_URL}>
						<img src="/img/loginBtn.png" alt="loginBtn" layout="fill" />
					</a>
				</button>
			</div>
		</div>
	)
}

export default Header
