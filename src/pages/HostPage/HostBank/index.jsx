import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { BankCard, BankItemCard, PrevButton } from './style'

const HostBank = () => {
	const navigate = useNavigate()

	const bankItems = useMemo(
		() => [
			{ id: 1, title: 'KEB하나' },
			{ id: 2, title: 'KB국민' },
			{ id: 3, title: '신한' },
			{ id: 4, title: 'NH농협' },
			{ id: 5, title: '우리' },
			{ id: 6, title: 'IBK기업' },
			{ id: 7, title: '카카오뱅크' },
			{ id: 8, title: '토스' }
		],
		[]
	)

	const onClickToPrev = useCallback(() => navigate(-1), [navigate])

	const onClickToNext = useCallback(
		bankId => () => {
			window.sessionStorage.setItem('bank', bankItems[bankId - 1].title)
			navigate(`/host/num/${bankId}`)
		},
		[bankItems, navigate]
	)

	return (
		<>
			<BankCard>
				<div className="bank-title">
					<div className="bank-title-group">
						<img src="/img/icon/pencil.png" alt="pencil" />
						<h2>정산받을 계좌를 선택해주세요!</h2>
					</div>
					<span>안전을 위해서 본인명의 계좌를 사용해주세요! </span>
				</div>
				<div className="bank-grid">
					{bankItems.map(bankItem => (
						<BankItemCard
							key={bankItem.id}
							onClick={onClickToNext(bankItem.id)}
						>
							<img
								src={`/img/bank/bank_${bankItem.id}.png`}
								alt={bankItem.title}
							/>
							<span>{bankItem.title}</span>
						</BankItemCard>
					))}
				</div>
			</BankCard>
			<PrevButton onClick={onClickToPrev}>전 단계로 돌아가기</PrevButton>
		</>
	)
}

export default HostBank
