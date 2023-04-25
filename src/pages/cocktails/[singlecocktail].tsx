import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchSingleCocktail } from '@/features/posts/postsSlice'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const SingleCocktail = () => {
	const [modifiedCocktail, setmodifiedCocktail] = useState<string[]>([])

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

	return <div>SingleCocktail</div>
}

export default SingleCocktail
