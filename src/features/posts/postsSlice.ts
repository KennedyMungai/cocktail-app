import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCocktails = createAsyncThunk(
	'cocktails/fetchCocktails',
	async () => {
		return await axios
			.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
			.then((res) => res.data)
	}
)

const cocktailSlice = createSlice({
	name: 'cocktails',
	initialState: {
		cocktails: [],
		cocktail: [],
		loading: false,
		error: null
	},
	reducers: {},
	extraReducers: {
		[fetchCocktails.pending]: (state, action: PayloadAction<any>) => {}
	}
})
