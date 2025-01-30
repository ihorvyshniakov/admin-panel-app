import { Navigate, Route, Routes } from 'react-router'

import { Account, Activation, Home, Login } from './pages'
import { useStoreContext } from './context/StoreContext'

export const Navigation = () => {
	const { isLoggedIn } = useStoreContext()

	if (isLoggedIn) {
		return (
			<Routes>
				<Route path='*' element={<Navigate to='/' replace />} />

				<Route path='/' element={<Home />} />
				<Route path='/activation' element={<Activation />} />
				<Route path='/account' element={<Account />} />
			</Routes>
		)
	}

	return (
		<Routes>
			<Route path='*' element={<Navigate to='/login' replace />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	)
}
