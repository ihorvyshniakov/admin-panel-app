import { type JSX } from 'react'

type InputProps = {
	name: string
	text: string
	type?: 'text' | 'password'
}

export const Input = ({
	name,
	text,
	type = 'text'
}: InputProps): JSX.Element => {
	return (
		<>
			<label>
				{text}
				<input name={name} type={type} />
			</label>
		</>
	)
}
