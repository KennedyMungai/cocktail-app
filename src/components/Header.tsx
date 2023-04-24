import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
	return (
		<Flex
			justifyContent={'center'}
			gap={4}
			borderBottom={'1px solid #ccc'}
			p={4}
		>
			<Heading as={'h1'} size={'2xl'}>
				Find Your Favorite Cocktails
			</Heading>
		</Flex>
	)
}

export default Header
