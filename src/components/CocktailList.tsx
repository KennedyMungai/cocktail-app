import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchCocktails } from '@/features/posts/postsSlice'
import { Heading } from '@chakra-ui/react'
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
		}
	}, [cocktails])

	return <Heading as='h2'>CocktailList</Heading>
}

export default CocktailList
