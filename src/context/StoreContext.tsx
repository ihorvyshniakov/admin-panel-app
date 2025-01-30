import {
	createContext,
	useContext,
	useEffect,
	useState,
	type PropsWithChildren
} from 'react'
import { useLocalStorage } from '../hooks'

type ContextValue = {
	isLoggedIn: boolean
	setIsLoggedIn: (value: boolean) => void
}

const StoreContext = createContext<ContextValue>({
	isLoggedIn: false,
	setIsLoggedIn: () => {}
})

export const useStoreContext = () => {
	const context = useContext(StoreContext)
	if (!context) {
		throw new Error(
			'useSessionsContext must be used within a SessionsContextProvider'
		)
	}
	return context
}

export const StoreContextProvider = ({ children }: PropsWithChildren) => {
	const { getValue, setValue, clearValue } = useLocalStorage()
	const [isLoggedIn, setIsLoggedIn] = useState(!!getValue('isLoggedIn'))

	useEffect(() => {
		console.log('isLoggedIn changed')

		if (isLoggedIn) {
			setValue('isLoggedIn', String(isLoggedIn))
		} else {
			clearValue('isLoggedIn')
		}
		// eslint-disable-next-line
	}, [isLoggedIn])

	return (
		<StoreContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				setIsLoggedIn
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}
