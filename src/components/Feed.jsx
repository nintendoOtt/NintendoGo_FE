/* eslint-disable arrow-body-style */
import { Link } from "react-router-dom"


const Feed = () => {
	return (
		<div className="flex-col">
			{/* 위 */}
			<div
				style={{ height: '100vh' }} 
				className="flex justify-center items-center">
				{/* 왼쪽 설명 */}
				<div className="w-64">
					<div className="text-3xl font-semibold">
						교양학이다 뼈 끝에 스며들어 가는 열락락락
					</div>
					<div className="mt-4">교양학이다 뼈 끝에 스며들어 가는 열락</div>

					<Link to="/select" className="">
						<button className="flex bg-purple-500 rounded-lg items-center px-4 py-4 mt-4">
							<div className="text-white pr-2">서비스 시작하기</div>
							<div className="relative w-6 h-6">
								<img className="" src="/img/arrow.png" alt="arrow" layout="contain"/>
							</div>
						</button>
					</Link>
				</div>

				{/* 오른쪽 그림 */}
				<div
					style={{ width:'450px', height:'313px'}} 
					className="relative">
					<img src="/img/homePicture.png" alt="homePicture" layout="fill" />
				</div>
			</div>

			{/* 가운데 */}
			<div
				style={{ height: '100vh' }}  
				className="h-[100vh] py-28">
				<div className="flex justify-center">
					<div className="relative w-[250px] h-[250px]">
						<img src="/img/partner.png" alt="partner" layout="fill" />
					</div>
				</div>

				<div className="flex justify-center items-center">
					<div className="relative w-6 h-6 mr-2">
						<img src="/img/logo.png" alt="partner" layout="fill" />
					</div>
					<div className="logoFont">Nintendo</div>
				</div>

				<div className="flex justify-between px-64 mt-32">
					<div className="text-center">
						<div className="font-medium text-4xl mb-2">30 명</div>
						<div className="text-gray-500">최근 일일 매칭 현황</div>
					</div>

					<div className="text-center">
						<div className="font-medium text-4xl mb-2">30 명</div>
						<div className="text-gray-500">최근 일주일 매칭 현황</div>
					</div>

					<div className="text-center">
						<div className="font-medium text-4xl mb-2">30 명</div>
						<div className="text-gray-500">최근 한달 매칭 현황</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Feed
