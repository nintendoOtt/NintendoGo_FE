const calcRem = size => `${size / 16}rem`

const fontSizes = {
	small: calcRem(14),
	base: calcRem(16),
	lg: calcRem(18),
	xl: calcRem(20),
	xxl: calcRem(22),
	xxxl: calcRem(24),
	big: calcRem(30),
	subTitleSize: calcRem(35),
	titleSize: calcRem(40)
}

const lightColors = {
	bgColor: '#F8F9FD',
	textColor: '#333',
	baseColor: '#fff',
	gray: '#707070',
	gray_w: '#ddd',
	primary: '#6C5CE7',
	secondary: '#A29BFE'
}

const darkColors = {
	bgColor: '#1e272e',
	textColor: '#eee',
	baseColor: '#000',
	gray: '#707070',
	gray_w: '#333',
	primary: '#6C5CE7',
	secondary: '#A29BFE'
}

const deviceSizes = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	tabletL: '1024px',
	NoteBook: '1440px'
}

const device = {
	mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
	mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
	mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
	tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
	tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
	NoteBook: `only screen and (max-width: ${deviceSizes.NoteBook})`
}

export const lightTheme = {
	fontSizes,
	colors: lightColors,
	deviceSizes,
	device
}

export const darkTheme = {
	fontSizes,
	colors: darkColors,
	deviceSizes,
	device
}
