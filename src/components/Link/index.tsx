import {
	type PropsWithChildren,
	type JSX,
	ComponentPropsWithoutRef
} from 'react'
import { NavLink } from 'react-router'

import './Link.css'

type ButtonProps = {
	to: string
} & PropsWithChildren &
	ComponentPropsWithoutRef<'a'>

export const Link = ({ to, children, ...props }: ButtonProps): JSX.Element => {
	return (
		<NavLink to={to} {...props}>
			{children}
		</NavLink>
	)
}
