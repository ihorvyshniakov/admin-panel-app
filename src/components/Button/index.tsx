import {
	type PropsWithChildren,
	type JSX,
	ComponentPropsWithoutRef
} from 'react'

import './Button.css'

type ButtonProps = PropsWithChildren & ComponentPropsWithoutRef<'button'>

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
	return (
		<button type='submit' {...props}>
			{children}
		</button>
	)
}
