import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { SelectCard } from './style'

const SelectBox = ({ title }) => {
	const navigate = useNavigate()

	const imgPath = useCallback(
		() => (title === '파티장' ? '/img/manager.png' : '/img/member.png'),
		[title]
	)()

	const onClickToPage = useCallback(
		() =>
			title === '파티장' ? navigate('/host/init') : navigate('/guest/init'),
		[navigate, title]
	)

	return (
		<SelectCard>
			<img src={imgPath} alt={title} />
			<div className="select_box__content">
				<h2>{title}이신가요?</h2>
				<span>교향악이다 뼈 끝에 스며들어 가는 열락</span>
			</div>
			<button onClick={onClickToPage}>{title}으로 참여하기</button>
		</SelectCard>
	)
}

export default SelectBox
