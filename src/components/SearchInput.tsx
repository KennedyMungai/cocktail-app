import {
	Button,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon
} from '@chakra-ui/react'
import React, { FormEvent, useRef } from 'react'

const SearchInput = () => {
	const searchRef = useRef<HTMLInputElement>(null)

	const submitHandler = (e: FormEvent<HTMLInputElement>) => {
		e.preventDefault()
	}

	return (
		<FormControl width='40rem' onSubmit={submitHandler}>
			<InputGroup>
				<Input type='text' placeholder='Search...' ref={searchRef} />
				<InputRightAddon children='Search' as={Button} type='submit' />
			</InputGroup>
			<FormHelperText>Your cocktail search query</FormHelperText>
		</FormControl>
	)
}

export default SearchInput
