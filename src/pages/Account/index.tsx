import { type FormEvent, useRef, type JSX, useState } from 'react'

import { Button, Input } from '../../components'
import { UserDetails } from './UserDetails'

export const Account = (): JSX.Element => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const [userId, setUserId] = useState<number | null>(null)

	const handleSearch = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (formRef.current) {
			const formData = new FormData(formRef.current)
			const userId = Number(formData.get('userId'))
			setUserId(userId)
		}
	}

	return (
		<>
			<h1>Account Page</h1>

			<form onSubmit={handleSearch} ref={formRef}>
				<Input
					name='userId'
					text='User ID (from 1 to 10)'
					type='number'
					min='1'
					max='10'
					required
				/>
				<Button>Search</Button>
			</form>

			{userId && <UserDetails userId={userId} />}
		</>
	)
}
