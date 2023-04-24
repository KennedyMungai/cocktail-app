import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchCocktails } from '@/features/posts/postsSlice'
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Flex,
	Heading,
	Image,
	Skeleton,
	Stack,
	Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const CocktailList = () => {
	const [modifiedCocktail, setModifiedCocktail] = useState<string[]>([])

	const { cocktails, loading } = useAppSelector((state) => state.posts)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchCocktails())
	}, [])

	useEffect(() => {
		if (cocktails) {
			const newCocktail = cocktails.map((cocktail) => {
				const {
					idDrink,
					strDrink,
					strDrinkThumb,
					strAlcoholic,
					strGlass,
					strInstructions
				} = cocktail

				return {
					id: idDrink,
					name: strDrink,
					image: strDrinkThumb,
					info: strAlcoholic,
					glass: strGlass,
					instructions: strInstructions
				}
			})

			setModifiedCocktail(newCocktail)
		} else {
			setModifiedCocktail([])
		}
	}, [cocktails])

	if (loading) {
		return (
			<Stack>
				<Skeleton height='20px' />
				<Skeleton height='20px' />
				<Skeleton height='20px' />
			</Stack>
		)
	}

	return (
		<Box>
			<Heading as='h2'>CocktailList</Heading>
			{modifiedCocktail.map((cocktail) => {
				const { id, name, image, info, glass, instructions } = cocktail

				return (
					<Flex direction='column' my='1rem' key={id}>
						<Card maxW='sm'>
							<CardBody>
								<Image
									src={image}
									alt={name}
									borderRadius='lg'
								/>
								<Stack mt='6' spacing='3'>
									<Heading size='lg'>{name}</Heading>
									<Text>{info}</Text>
									<Text color='gray.500'>{instructions}</Text>
								</Stack>
							</CardBody>
							<Divider />
							<CardFooter>
								<Button variant='solid' colorScheme='blue'>
									<Link href={'#'}>View Cocktail</Link>
								</Button>
							</CardFooter>
						</Card>
					</Flex>
				)
			})}
		</Box>
	)
}

export default CocktailList
