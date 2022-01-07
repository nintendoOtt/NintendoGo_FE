import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Input } from 'styles/common'

import { ButtonGroup, NumButton, NumCard } from './style'

const HostNum = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const onClickToPrev = useCallback(() => {
		navigate('/host/bank')
	}, [navigate])

	const onClickToNext = useCallback(() => {
		navigate('/host/email')
	}, [navigate])

	return (
		<>
			<NumCard>
				<div className="num_header">
					<div className="num_title">
						<img src={`/img/bank/bank_${id}.png`} alt={`bank_${id}`} />
						<h2>계좌번호를 입력해주세요!</h2>
					</div>
					<span className="num_subtitle">
						안전을 위해서 본인명의 계좌를 사용해주세요!
					</span>
				</div>
				<Input placeholder="계좌 번호를 입력해주세요!" />
			</NumCard>
			<ButtonGroup>
				<NumButton onClick={onClickToPrev}>prev</NumButton>
				<NumButton onClick={onClickToNext}>next</NumButton>
			</ButtonGroup>
		</>
	)
}

export default HostNum
