import { Route, Routes } from 'react-router'

import './App.css'
import { Account, Activation, Home, Login } from './pages'
import { Header } from './components'

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='login' element={<Login />}></Route>
					<Route path='activation' element={<Activation />}></Route>
					<Route path='account' element={<Account />}></Route>
				</Routes>
			</main>
		</>
	)
}

export default App
