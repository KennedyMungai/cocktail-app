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

		const searchText = searchRef.current.value

		console.log('Submitted')
	}

	return (
		<FormControl width='40rem'>
			<InputGroup>
				<Input type='text' placeholder='Search...' ref={searchRef} />
				<InputRightAddon
					children='Search'
					as={Button}
					type='submit'
					onClick={submitHandler}
				/>
			</InputGroup>
			<FormHelperText>What's your poison?</FormHelperText>
		</FormControl>
	)
}

export default SearchInput
