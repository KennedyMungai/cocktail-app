import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchCocktails } from '@/features/posts/postsSlice'
import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const CocktailList = () => {
	const [modifiedCocktail, setModifiedCocktail] = useState<string[]>([])

	const { cocktails, loading } = useAppSelector((state) => state.posts)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchCocktails())
	}, [])

	useEffect(() => {}, [cocktails])

	return <Heading as='h2'>CocktailList</Heading>
}

export default CocktailList
