/* eslint-disable prefer-const */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client';

import { loginData } from 'apollo'
import useInput from 'hooks/useInput'
import { Input } from 'styles/common'
import { ButtonGroup, EmailButton, EmailCard } from './style'

const GuestEmail = () => {
	const navigate = useNavigate()
	const userData = useReactiveVar(loginData);

	const [email, onChangeEmail] = useInput()
	const [valid, setValid] = useState(false)
	
	const onClickToNext = () => {
		window.sessionStorage.setItem('userId', userData.loginUser.id) 
		window.sessionStorage.setItem('nintendoEmail', email);
		navigate('/guest/payment')
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
	
				<EmailButton onClick={onClickToNext} disabled={!valid}>
					다음 단계로 넘어가기
				</EmailButton>
			</ButtonGroup>
		</>
	)
}

export default GuestEmail
