import { ComponentPropsWithoutRef, type JSX } from 'react'
import './Input.css'

type InputProps = {
	name: string
	text: string
	type?: 'text' | 'password' | 'number'
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
	name,
	text,
	type = 'text',
	...props
}: InputProps): JSX.Element => {
	return (
		<div className='input'>
			<label htmlFor={name}>{text}</label>
			<input id={name} name={name} type={type} {...props} />
		</div>
	)
}
