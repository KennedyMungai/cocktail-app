import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchSingleCocktail } from '@/features/posts/postsSlice'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const SingleCocktail = () => {
	const router = useRouter()
	const { singlecocktail } = router.query

	const { cocktail, loading } = useAppSelector((state) => state.posts)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(
			fetchSingleCocktail({ singlecocktail: singlecocktail as string })
		)
	}, [singlecocktail])

	return <div>SingleCocktail</div>
}

export default SingleCocktail
