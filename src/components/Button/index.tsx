import { type PropsWithChildren, type JSX } from 'react'

type ButtonProps = PropsWithChildren

export const Button = ({ children }: ButtonProps): JSX.Element => {
	return <button type='submit'>{children}</button>
}
