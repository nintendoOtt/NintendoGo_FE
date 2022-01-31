import { atom } from 'recoil'
import { getDarkMode } from 'utils/localStroage'

export const isDarkState = atom({
	key: 'isDark',
	default: getDarkMode()
})
