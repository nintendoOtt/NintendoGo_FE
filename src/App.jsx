import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { ThemeProvider } from '@emotion/react'

import RouterConfig from 'router'
import { isDarkState } from 'atoms'
import { darkTheme, lightTheme } from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'
import LoadingSpinner from 'components/common/LoadingSpinner'
import ToggleModeBtn from 'components/common/ToggleModeBtn'

const App = () => {
	const isDark = useRecoilValue(isDarkState)

	return (
		<BrowserRouter>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<GlobalStyle />
				<Suspense fallback={<LoadingSpinner />}>
					<RouterConfig />
					<ToggleModeBtn />
				</Suspense>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
