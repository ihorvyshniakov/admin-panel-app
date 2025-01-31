import './Header.css'

import { useStoreContext } from '../../context/StoreContext'
import { Button, Link } from '../../components'

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
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/activation'>Activation</Link>
				</li>
				<li>
					<Link to='/account'>Account</Link>
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
