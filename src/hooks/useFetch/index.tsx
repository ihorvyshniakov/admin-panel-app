import { useEffect, useState } from 'react'

export const useFetch = <T,>(url: string = '') => {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			setError('')
			try {
				const response = await fetch(url)
				if (!response.ok) {
					throw new Error('Not found')
				}
				const jsonData = await response.json()
				setData(jsonData)
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message)
				}
			} finally {
				setIsLoading(false)
			}
		}

		if (url) {
			fetchData()
		}
	}, [url])

	return { data, error, isLoading }
}
