import { type FormEvent, useRef, useState } from 'react'
import { Button, Input } from '../../../components'

const EditableCell = ({
	name,
	value
}: {
	name: string
	value: string
}): JSX.Element => {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [editedValue, setEditedValue] = useState('')
	const [isEditMode, setIsEditMode] = useState(false)

	const handleEdit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setIsEditMode(true)

		if (inputRef.current) {
			const fieldValue = inputRef.current.value || ''

			if (typeof fieldValue === 'string' && fieldValue.trim() !== '') {
				setEditedValue(fieldValue)
				setIsEditMode(false)
				alert(`Field '${name}' successfully modified`)
			}
		}
	}

	return (
		<>
			<td>
				<form
					id={`edit-form-${name}`}
					className='form-small'
					onSubmit={handleEdit}
				>
					{isEditMode ? (
						<Input
							ref={inputRef}
							name={name}
							type='text'
							required
						/>
					) : (
						<p>{editedValue || value}</p>
					)}
				</form>
			</td>
			<td>
				<Button form={`edit-form-${name}`} className='edit-button'>
					{isEditMode ? 'Ok' : 'Edit'}
				</Button>
			</td>
		</>
	)
}

export default EditableCell
