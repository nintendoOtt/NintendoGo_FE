import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'

import RouterConfig from 'router'
import theme from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'

import configureStore from './store/configureStore'
import './App.css'

const App = () => (
	<>	
		<Provider store={configureStore()}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Suspense fallback={<span>Loading...</span>}>
						<RouterConfig />
					</Suspense>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</>
)

export default App;
