import { type JSX } from 'react'
import { Link } from 'react-router'

export const Header = (): JSX.Element => {
	return (
		<header>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
				<li>
					<Link to='/activation'>Activation</Link>
				</li>
				<li>
					<Link to='/account'>Account</Link>
				</li>
			</ul>
		</header>
	)
}
