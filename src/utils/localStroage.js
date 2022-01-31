const STORAGE_KEY = 'dark_mode'

export const setDarkMode = () => localStorage.setItem(STORAGE_KEY, 'true')
export const getDarkMode = () => localStorage.getItem(STORAGE_KEY) || null
export const removeDarkMode = () => localStorage.removeItem(STORAGE_KEY)
