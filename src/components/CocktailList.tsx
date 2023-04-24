import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchCocktails } from '@/features/posts/postsSlice'
import { Box, Heading, Skeleton, Stack } from '@chakra-ui/react'
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
					strGlass
				} = cocktail

				return {
					id: idDrink,
					name: strDrink,
					image: strDrinkThumb,
					info: strAlcoholic,
					glass: strGlass
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
		</Box>
	)
}

export default CocktailList
