export const useLocalStorage = () => {
	const getValue = (name: string): string | null => {
		return localStorage.getItem(name)
	}

	const setValue = (name: string, value: string) => {
		localStorage.setItem(name, value)
	}

	const clearValue = (name: string) => {
		localStorage.removeItem(name)
	}

	return { getValue, setValue, clearValue }
}
