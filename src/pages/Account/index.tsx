import { type FormEvent, useRef, type JSX, useState } from 'react'

import { Button, Input } from '../../components'
import { getUserDetailsById, type User } from '../../utils/http'

export const Account = (): JSX.Element => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const [user, setUser] = useState<User | null>(null)
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleSearch = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (formRef.current) {
			const formData = new FormData(formRef.current)
			const userId = Number(formData.get('userId'))

			setUser(null)
			setIsLoading(true)
			getUserDetailsById(userId)
				.then(data => {
					setUser(data)
					setError('')
				})
				.catch(error => {
					setError(error.message)
				})
				.finally(() => {
					setIsLoading(false)
				})
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

			{isLoading && <div>Loading...</div>}
			{error && <div style={{ color: 'red' }}>{error}</div>}
			{user && (
				<table className='user-info'>
					<tbody>
						<tr>
							<th>Id</th>
							<td>{user.id}</td>
						</tr>
						<tr>
							<th>Name</th>
							<td>{user.name}</td>
						</tr>
						<tr>
							<th>Address</th>
							<td>{user.address}</td>
						</tr>
						<tr>
							<th>Email</th>
							<td>{user.email}</td>
						</tr>
						<tr>
							<th>Phone</th>
							<td>{user.phone}</td>
						</tr>
						<tr>
							<th>Company</th>
							<td>{user.company}</td>
						</tr>
					</tbody>
				</table>
			)}
		</>
	)
}
