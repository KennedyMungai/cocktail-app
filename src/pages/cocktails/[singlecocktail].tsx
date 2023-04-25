import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchSingleCocktail } from '@/features/posts/postsSlice'
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Flex,
	Heading,
	Skeleton,
	Stack,
	Text,
	Image
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const SingleCocktail = () => {
	const [modifiedCocktail, setmodifiedCocktail] = useState([])

	const router = useRouter()
	const { singlecocktail } = router.query

	const { cocktail, loading } = useAppSelector((state) => state.posts)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchSingleCocktail({ singlecocktail }))
	}, [singlecocktail])

	useEffect(() => {
		if (!cocktail) {
			const {
				strDrink: name,
				strDrinkThumb: image,
				strAlcoholic: info,
				strCategory: category,
				strGlass: glass,
				strInstructions: instructions,
				strIngredient1,
				strIngredient2,
				strIngredient3,
				strIngredient4,
				strIngredient5
			} = cocktail

			const ingredients = [
				strIngredient1,
				strIngredient2,
				strIngredient3,
				strIngredient4,
				strIngredient5
			]

			const newCocktail = {
				name,
				image,
				info,
				category,
				glass,
				instructions,
				ingredients
			}

			setmodifiedCocktail(newCocktail)
		} else {
			setmodifiedCocktail([])
		}
	}, [singlecocktail, cocktail])

	if (!modifiedCocktail) {
		return (
			<Flex justify={'center'} color={'red.300'}>
				<Text>No Cocktails to be displayed</Text>
			</Flex>
		)
	} else {
		const {
			name,
			image,
			category,
			info,
			glass,
			instructions,
			ingredients
		} = modifiedCocktail

		return (
			<Flex justify={'center'}>
				<Flex>
					{loading ? (
						<Stack>
							<Skeleton height='20px' />
							<Skeleton height='20px' />
							<Skeleton height='20px' />
						</Stack>
					) : (
						<Stack spacing={'4rem'}>
							<Flex direction='column' my='1rem'>
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
											<Text color='gray.500'>
												{instructions}
											</Text>
										</Stack>
									</CardBody>
								</Card>
							</Flex>
							<Button variant={'ghost'}>
								<Link href={'/'}>Go Back</Link>
							</Button>
						</Stack>
					)}
				</Flex>
			</Flex>
		)
	}
}

export default SingleCocktail
