import { type FormEvent, useRef, useState } from 'react'

import { Input, Button, Form, Error } from '../../components'
import { useNavigate } from 'react-router'
import { useStoreContext } from '../../context/StoreContext'
import { validLogin, validPassword } from '../../data/constants'

export const Login = (): JSX.Element => {
	const navigate = useNavigate()
	const { setIsLoggedIn } = useStoreContext()

	const formRef = useRef<HTMLFormElement | null>(null)
	const [error, setError] = useState<string | null>(null)

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
			<Form onSubmit={handleSubmit} ref={formRef}>
				<Input name='username' text='Username' />
				<Input name='password' text='Password' type='password' />
				<Button>Login</Button>
				{error && <Error error={error} />}
			</Form>
		</>
	)
}
