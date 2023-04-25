import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchSingleCocktail } from '@/features/posts/postsSlice'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const SingleCocktail = () => {
	const router = useRouter()

	const { cocktail, loading } = useAppSelector((state) => state.posts)

	const dispatch = useAppDispatch()

	useEffect(() => {})

	const { singlecocktail } = router.query

	return <div>SingleCocktail</div>
}

export default SingleCocktail
