import Header from '@/components/Header'
import SearchInput from '@/components/SearchInput'
import { Flex, Heading } from '@chakra-ui/react'

export default function Home() {
	return (
		<Flex direction={'column'}>
			<Flex justifyContent={'center'} mb={'4rem'}>
				<Header />
			</Flex>
			<Flex justifyContent={'center'}>
				<SearchInput />
			</Flex>
		</Flex>
	)
}
