import { fetchSingleCocktail } from '@/features/posts/postsSlice'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type Props = {}

const SingleCocktail = (props: Props) => {
	const router = useRouter()

	const { singlecocktail } = router.query

	return <div>SingleCocktail</div>
}

export default SingleCocktail
