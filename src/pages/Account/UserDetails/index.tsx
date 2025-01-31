import { Error, Preloader } from '../../../components'
import { useFetch } from '../../../hooks'
import EditableCell from './EditableCell'

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

	if (isLoading) return <Preloader />
	if (error) return <Error error={error} />

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
						<EditableCell
							name='Address'
							value={data.address.city}
						/>
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
