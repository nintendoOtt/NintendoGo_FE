const STORAGE_KEY = 'host-items'

export const getHostInfo = () => sessionStorage.getItem(STORAGE_KEY)

export const setHostInfo = item => {
	const parsed = JSON.stringify({ key: item })
	return sessionStorage.setItem(STORAGE_KEY, parsed)
}
