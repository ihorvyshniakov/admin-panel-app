import { type FormEvent, useRef, type JSX, useState } from 'react'

import { Input, Button } from '../../components'
import { useNavigate } from 'react-router'
import { useStoreContext } from '../../context/StoreContext'

const validLogin = 'admin'
const validPassword = 'admin123'

export const Login = (): JSX.Element => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()
	const { setIsLoggedIn } = useStoreContext()

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (formRef.current) {
			const formData = new FormData(formRef.current)
			const username = formData.get('username')
			const password = formData.get('password')

			if (username === validLogin && password === validPassword) {
				setIsLoggedIn(true)
				navigate('/')
			} else {
				setIsLoggedIn(false)
				setError('Wrong login or password')
			}
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} ref={formRef}>
				<Input name='username' text='Username' />
				<Input name='password' text='Password' type='password' />
				<Button>Login</Button>
				{error && <div style={{ color: 'red' }}>{error}</div>}
			</form>
		</>
	)
}
