import { Global, css, useTheme } from '@emotion/react'
import emotionReset from 'emotion-reset'

const GlobalStyle = () => {
	const theme = useTheme()

	return (
		<Global
			styles={css`
				${emotionReset}
				html {
					font-size: 100%;
				}
				body {
					background-color: ${theme.colors.bgColor};
					color: ${theme.colors.textColor};
					transition: 0.5s;
					line-height: 1.4;
					font-family: 'Noto Sans KR', sans-serif;
					font-size: 1em;
					box-sizing: border-box;
					overflow-x: hidden;
					-ms-overflow-style: none;
					&::-webkit-scrollbar {
						display: none !important;
					}
					a {
						text-decoration: none;
					}
					* {
						box-sizing: border-box;
					}
				}
				@font-face {
					font-family: 'Noto Sans KR';
					font-weight: 900;
					src: url('styles/fonts/NotoSansKR-Black.otf')
						format('embedded-opentype');
				}
				@font-face {
					font-family: 'Noto Sans KR';
					font-weight: 700;
					src: url('styles/fonts/NotoSansKR-Bold.otf')
						format('embedded-opentype');
				}
				@font-face {
					font-family: 'Noto Sans KR';
					font-weight: 500;
					src: url('styles/fonts/NotoSansKR-Medium.otf')
						format('embedded-opentype');
				}
				@font-face {
					font-family: 'Noto Sans KR';
					font-weight: 400;
					src: url('styles/fonts/NotoSansKR-Regular.otf')
						format('embedded-opentype');
				}
				@font-face {
					font-family: 'Noto Sans KR';
					font-weight: 300;
					src: url('styles/fonts/NotoSansKR-Light.otf')
						format('embedded-opentype');
				}
				@font-face {
					font-family: 'Noto Sans KR';
					font-weight: 100;
					src: url('styles/fonts/NotoSansKR-Thin.otf')
						format('embedded-opentype');
				}
				@font-face {
					font-family: 'Product Sans';
					src: url('styles/fonts/Product-Sans-Regular.ttf')
						format('embedded-opentype');
				}
				@media (min-width: 300px) {
					html {
						font-size: 60%;
					}
				}
				@media (min-width: 500px) {
					html {
						font-size: 75%;
					}
				}
				@media (min-width: 700px) {
					html {
						font-size: 90%;
					}
				}
				@media (min-width: 1200px) {
					html {
						font-size: 100%;
					}
				}
			`}
		/>
	)
}

export default GlobalStyle
