import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import styled from '@emotion/styled'

import { isDarkState } from 'atoms'
import { removeDarkMode, setDarkMode } from 'utils/localStroage'

const Button = styled.button`
	width: 110px;
	background-color: #333;
	border: none;
	font-size: 16px;
	font-weight: 500;
	color: #eee;
	cursor: pointer;
	background-color: ${({ theme }) => theme.formColor};
	padding: 12px 16px;
	position: fixed;
	right: 20px;
	bottom: 20px;
	border-radius: 10px;
	transition: 0.5s;
	&:hover {
		filter: brightness(80%);
	}
`

const ToggleModeBtn = () => {
	const [isDark, setIsDark] = useRecoilState(isDarkState)

	const onToggleMode = useCallback(() => {
		setIsDark(prev => (prev ? null : 'true'))
		if (isDark) removeDarkMode()
		else setDarkMode()
	}, [isDark, setIsDark])

	return <Button onClick={onToggleMode}>button</Button>
}

export default ToggleModeBtn
