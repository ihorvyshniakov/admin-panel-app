import { forwardRef, type ComponentPropsWithRef } from 'react'
import './Input.css'

type InputProps = {
	name: string
	text?: string
	type?: 'text' | 'password' | 'number'
} & ComponentPropsWithRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ name, text = '', type = 'text', ...props }, ref): JSX.Element => {
		return (
			<div className='input'>
				{text && <label htmlFor={name}>{text}</label>}
				<input id={name} name={name} type={type} ref={ref} {...props} />
			</div>
		)
	}
)
