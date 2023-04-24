import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
	return (
		<Flex justifyContent={'center'}>
			<Heading>Find Your Favorite Cocktails</Heading>
		</Flex>
	)
}

export default Header
