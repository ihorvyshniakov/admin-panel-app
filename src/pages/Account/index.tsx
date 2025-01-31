import { type FormEvent, useRef, useState } from 'react'

import { Button, Form, Input } from '../../components'
import { UserDetails } from './UserDetails'

export const Account = (): JSX.Element => {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [userId, setUserId] = useState<number | null>(null)

	const handleSearch = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (inputRef.current) {
			const userId = Number(inputRef.current.value)
			setUserId(userId)
		}
	}

	return (
		<>
			<h1>Account Page</h1>

			<Form onSubmit={handleSearch}>
				<Input
					name='userId'
					text='User ID (from 1 to 10)'
					type='number'
					min='1'
					max='10'
					required
					ref={inputRef}
				/>
				<Button>Search</Button>
			</Form>

			{userId && <UserDetails userId={userId} />}
		</>
	)
}
