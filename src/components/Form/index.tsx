import {
	forwardRef,
	type PropsWithChildren,
	type ComponentPropsWithRef,
	type JSX
} from 'react'

import './Form.css'

type FormProps = PropsWithChildren & ComponentPropsWithRef<'form'>

export const Form = forwardRef<HTMLFormElement, FormProps>(
	(props, ref): JSX.Element => {
		return (
			<form ref={ref} {...props}>
				{props.children}
			</form>
		)
	}
)
