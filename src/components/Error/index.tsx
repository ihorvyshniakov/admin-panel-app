import { type JSX } from 'react'

import './Error.css'

type ErrorProps = {
	error: string
}

export const Error = ({ error }: ErrorProps): JSX.Element => {
	return <div className='error'>{error}</div>
}
