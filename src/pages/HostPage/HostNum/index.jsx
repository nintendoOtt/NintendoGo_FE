import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { hostData } from 'apollo'

import useInput from 'hooks/useInput'
import { Input } from 'styles/common'
import { ButtonGroup, NumButton, NumCard } from './style'

const HostNum = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const [account, onChangeAccount] = useInput()
	const [valid, setValid] = useState(false)

	const onClickToPrev = useCallback(() => navigate(-1), [navigate])
	// const onClickToNext = useCallback(() => navigate('/host/email'), [navigate])

	const onClickToNext = () => {
		hostData((prev) => ({
			prev,
			account: account
		}))
		// hostData({ ...hostData, account: account })
		navigate('/host/email')
	}

	useEffect(() => {
		if (account) setValid(true)
		else setValid(false)
	}, [account])

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
				<Input
					value={account}
					onChange={onChangeAccount}
					placeholder="계좌 번호를 입력해주세요!"
				/>
			</NumCard>
			<ButtonGroup>
				<NumButton bgColor="#eee" onClick={onClickToPrev}>
					전 단계로 돌아가기
				</NumButton>
				<NumButton onClick={onClickToNext} disabled={!valid}>
					다음 단계로 넘어가기
				</NumButton>
			</ButtonGroup>
		</>
	)
}

export default HostNum
