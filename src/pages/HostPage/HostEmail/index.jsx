import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { hostData } from 'apollo'

import useInput from 'hooks/useInput'
import { Input } from 'styles/common'
import { ButtonGroup, EmailButton, EmailCard } from './style'

const HostEmail = () => {
	const navigate = useNavigate()

	const [email, onChangeEmail] = useInput()
	const [valid, setValid] = useState(false)

	const onClickToPrev = useCallback(() => navigate(-1), [navigate])
	const onClickToNext = () => {
		hostData((prev) => ({
			prev,
			nintendoId: email
		}))
		// hostData({...hostData, nintendoId: email })
		navigate('/invite/init')
	}

	useEffect(() => {
		if (email) setValid(true)
		else setValid(false)
	}, [email])

	return (
		<>
			<EmailCard>
				<div className="email_header">
					<div className="email_title">
						<img src="/img/icon/pencil.png" alt="pencil" />
						<h2>닌텐도 아이디를 입력해주세요!</h2>
					</div>
					<span className="email_subtitle">
						안전을 위해서 본인명의 아이디를 사용해주세요!
					</span>
				</div>
				<Input
					value={email}
					onChange={onChangeEmail}
					placeholder="닌텐도 아이디를 입력해주세요!"
				/>
			</EmailCard>
			<ButtonGroup>
				<EmailButton bgColor="#eee" onClick={onClickToPrev}>
					전 단계로 돌아가기
				</EmailButton>
				<EmailButton onClick={onClickToNext} disabled={!valid}>
					파티 만들기 완료하기
				</EmailButton>
			</ButtonGroup>
		</>
	)
}

export default HostEmail
