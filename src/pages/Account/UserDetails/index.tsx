import { type FormEvent, useState, type JSX, useRef } from 'react'

import { Button, Input } from '../../../components'
import { useFetch } from '../../../hooks'

type User = {
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

type UserDetailsProps = {
	userId: number
}

export const UserDetails = ({ userId }: UserDetailsProps): JSX.Element => {
	const { data, error, isLoading } = useFetch<User>(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	)
	const formRef = useRef<HTMLFormElement | null>(null)

	const [editedAddress, setEditedAddress] = useState('')
	const [isEditMode, setIsEditMode] = useState(false)

	const handleEdit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setIsEditMode(true)

		if (formRef.current) {
			const formData = new FormData(formRef.current)
			const address = formData.get('address') || ''

			if (typeof address === 'string' && address.trim() !== '') {
				setEditedAddress(address)
				setIsEditMode(false)
				alert('Address successfully modified')
			}
		}
	}

	if (isLoading) return <div>Loading...</div>
	if (error) return <div style={{ color: 'red' }}>{error}</div>

	if (data) {
		return (
			<table className='user-info'>
				<tbody>
					<tr>
						<th>Id</th>
						<td>{data.id}</td>
						<td></td>
					</tr>
					<tr>
						<th>Name</th>
						<td>{data.name}</td>
						<td></td>
					</tr>
					<tr>
						<th>Address</th>
						{/* <td>{data.address.city}</td> */}
						<td>
							<form
								id='addressEditForm'
								className='form-small'
								onSubmit={handleEdit}
								ref={formRef}
							>
								{isEditMode ? (
									<Input
										name='address'
										type='text'
										required
									/>
								) : (
									<p>{editedAddress || data.address.city}</p>
								)}
							</form>
						</td>
						<td>
							<Button form='addressEditForm'>
								{isEditMode ? 'Ok' : 'Edit'}
							</Button>
						</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>{data.email}</td>
						<td></td>
					</tr>
					<tr>
						<th>Phone</th>
						<td>{data.phone}</td>
						<td></td>
					</tr>
					<tr>
						<th>Company</th>
						<td>{data.company.name}</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		)
	}

	return <></>
}
