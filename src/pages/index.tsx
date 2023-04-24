import { Flex, Heading } from '@chakra-ui/react'

export default function Home() {
	return (
		<Flex direction={'column'}>
			<Flex justifyContent={'center'} mb={'4rem'}>
				<Heading as={'h1'} size={'2xl'}>
					Cocktail Index
				</Heading>
			</Flex>
			<Flex></Flex>
		</Flex>
	)
}
