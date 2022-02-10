import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { isDarkState } from 'atoms'
import { removeDarkMode, setDarkMode } from 'utils/localStroage'
import { Button } from 'styles/common'
import styled from '@emotion/styled'

const ToggleButton = styled(Button)`
	min-width: 150px;
	position: fixed;
	right: 25px;
	bottom: 25px;
	width: auto;
	padding: 12px 24px;
	color: ${({ theme }) => theme.colors.textColor};
	background-color: ${({ theme }) => theme.colors.btnColor};
	font-size: ${({ theme }) => theme.fontSizes.lg};
	border-radius: 50px;
	* {
		transition: initial;
	}
	.inner {
		display: flex;
		gap: 5px;
		justify-content: center;
		align-items: center;
	}
`

const ToggleModeBtn = () => {
	const [isDark, setIsDark] = useRecoilState(isDarkState)

	const onToggleMode = useCallback(() => {
		setIsDark(prev => (prev ? null : 'true'))
		if (isDark) removeDarkMode()
		else setDarkMode()
	}, [isDark, setIsDark])

	return (
		<ToggleButton onClick={onToggleMode}>
			{isDark ? (
				<div className="inner">
					<BsMoonFill />
					<span>라이트 모드</span>
				</div>
			) : (
				<div className="inner">
					<BsSunFill />
					<span>다크 모드</span>
				</div>
			)}
		</ToggleButton>
	)
}

export default ToggleModeBtn
