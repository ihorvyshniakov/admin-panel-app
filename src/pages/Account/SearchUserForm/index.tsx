import { type FormEvent, useRef } from 'react'

import { type User } from '..'
import { Button, Error, Form, Input, Preloader } from '../../../components'
import { useFetch } from '../../../hooks'

type SearchUserFormProps = {
	setUserId: (value: number) => void
}

export const SearchUserForm = ({
	setUserId
}: SearchUserFormProps): JSX.Element => {
	const { data, error, isLoading } = useFetch<User[]>(
		'https://jsonplaceholder.typicode.com/users'
	)

	const inputRef = useRef<HTMLInputElement | null>(null)

	const handleSearch = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (inputRef.current) {
			const userId = Number(inputRef.current.value)
			setUserId(userId)
		}
	}

	if (isLoading) return <Preloader />
	if (error) return <Error error={error} />

	if (data) {
		const minUserId = data[0].id
		const maxUserId = data[data.length - 1].id

		return (
			<Form onSubmit={handleSearch}>
				<Input
					name='userId'
					text={`User ID (from ${minUserId} to ${maxUserId})`}
					type='number'
					min={minUserId}
					max={maxUserId}
					required
					ref={inputRef}
				/>
				<Button>Search</Button>
			</Form>
		)
	}

	return <></>
}
