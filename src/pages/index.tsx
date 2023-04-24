import CocktailList from '@/components/CocktailList'
import Header from '@/components/Header'
import SearchInput from '@/components/SearchInput'
import { Flex, Heading } from '@chakra-ui/react'

export default function Home() {
	return (
		<Flex direction={'column'} gap='2rem'>
			<Flex justifyContent={'center'}>
				<Header />
			</Flex>
			<Flex justifyContent={'center'}>
				<SearchInput />
			</Flex>
			<Flex justifyContent={'center'}>
				<CocktailList />
			</Flex>
		</Flex>
	)
}
