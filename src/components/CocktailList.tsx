import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchCocktails } from '@/features/posts/postsSlice'
import React, { useEffect, useState } from 'react'

const CocktailList = () => {
	const [modifiedCocktail, setModifiedCocktail] = useState<string[]>([])

	const { cocktails, loading } = useAppSelector((state) => state.posts)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchCocktails())
	}, [])

	return <div>CocktailList</div>
}

export default CocktailList
