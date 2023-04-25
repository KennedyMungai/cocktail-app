import { Input } from '@chakra-ui/react'
import React, { FormEvent, useRef } from 'react'

const SearchInput = () => {
	const searchRef = useRef<HTMLInputElement>(null)

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<Input
			placeholder='Search Cocktails'
			width='30rem'
			ref={searchRef}
			onSubmit={submitHandler}
		/>
	)
}

export default SearchInput
