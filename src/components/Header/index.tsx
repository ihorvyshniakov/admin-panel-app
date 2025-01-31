import { NavLink } from 'react-router'

import './Header.css'
import { Button } from '../Button'
import { useStoreContext } from '../../context/StoreContext'

export const Header = (): JSX.Element => {
	const { isLoggedIn, setIsLoggedIn } = useStoreContext()

	if (!isLoggedIn) {
		return (
			<header>
				<p>Please log in to continue</p>
			</header>
		)
	}

	return (
		<header>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/activation'>Activation</NavLink>
				</li>
				<li>
					<NavLink to='/account'>Account</NavLink>
				</li>
				<li>
					<Button onClick={() => setIsLoggedIn(false)}>
						User Icon/Logout
					</Button>
				</li>
			</ul>
		</header>
	)
}
