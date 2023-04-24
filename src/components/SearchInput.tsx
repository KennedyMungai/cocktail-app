import { Input } from '@chakra-ui/react'
import React, { useRef } from 'react'

const SearchInput = () => {
	const searchRef = useRef<HTMLInputElement>(null)

	return (
		<Input placeholder='Search Cocktails' width='30rem' ref={searchRef} />
	)
}

export default SearchInput
