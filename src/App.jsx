import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import RouterConfig from 'router'
import theme from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'
import './App.css'

const App = () => (
	<>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Suspense fallback={<span>Loading...</span>}>
					<RouterConfig />
				</Suspense>
			</ThemeProvider>
		</BrowserRouter>
	</>
)

export default App
