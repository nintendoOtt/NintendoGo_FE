import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import SelectLayout from 'components/layout/SelectLayout'
import SelectBox from 'components/SelectBox'
import { CancelButton, SelectContainer } from './style'

const SelectPage = () => {
	const navigate = useNavigate()
	const onClickToMain = useCallback(() => navigate('/'), [navigate])

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>파티장/파티원 선택 &gt; NintendoGo</title>
				</Helmet>
			</HelmetProvider>
			<SelectLayout>
				<SelectContainer>
					<div className="select__title">
						<h2>NintendoGo 에서 파티 서비스를 이용해 보세요!</h2>
						<span>
							서비스를 이용하기 위해 파티장 또는 파티원을 선택해 주세요!
						</span>
					</div>
					<div className="select__content">
						<SelectBox title="파티장" />
						<SelectBox title="파티원" />
					</div>
					<CancelButton onClick={onClickToMain}>메인으로 돌아가기</CancelButton>
				</SelectContainer>
			</SelectLayout>
		</>
	)
}

export default SelectPage
