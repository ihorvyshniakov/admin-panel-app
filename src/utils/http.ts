export type User = {
	id: number
	name: string
	address: string
	email: string
	phone: string
	company: string
}

export async function getUserDetailsById(userId: number) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	)
	const { id, name, address, email, phone, company } = await response.json()

	if (!response.ok) {
		throw new Error('Not found')
	}

	const userDetails: User = {
		id,
		name,
		address: address.city,
		email,
		phone,
		company: company.name
	}

	return userDetails
}
