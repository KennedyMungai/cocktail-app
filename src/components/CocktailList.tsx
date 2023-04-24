import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchCocktails } from '@/features/posts/postsSlice'
import React, { useEffect, useState } from 'react'

const CocktailList = () => {
	const { cocktails, cocktail, loading, error } = useAppSelector(
		(state) => state.posts
	)
	const dispatch = useAppDispatch()

	return <div>CocktailList</div>
}

export default CocktailList
