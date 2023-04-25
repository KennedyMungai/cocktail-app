import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchSingleCocktail } from '@/features/posts/postsSlice'
import { Flex, Text } from '@chakra-ui/react'
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
		if (cocktail.length > 0) {
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
			} = cocktail[0]

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

		return <div>SingleCocktail</div>
	}
}

export default SingleCocktail
