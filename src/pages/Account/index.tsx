import { useState, type JSX } from 'react'

import { UserDetails } from './UserDetails'
import { SearchUserForm } from './SearchUserForm'

export type User = {
	id: number
	name: string
	email: string
	phone: string
	address: {
		city: string
	}
	company: {
		name: string
	}
}

export const Account = (): JSX.Element => {
	const [userId, setUserId] = useState<number | null>(null)

	return (
		<>
			<h1>Account Page</h1>

			<SearchUserForm setUserId={setUserId} />

			{userId && <UserDetails userId={userId} />}
		</>
	)
}
