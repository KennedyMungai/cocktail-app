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

interface CocktailState {
	cocktails: any[]
	cocktail: any[]
	loading: boolean
	error: string | null
}

const initialState: CocktailState = {
	cocktails: [],
	cocktail: [],
	loading: false,
	error: null
}

const cocktailSlice = createSlice({
	name: 'cocktails',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(
				fetchCocktails.pending,
				(state: CocktailState, action: PayloadAction<any>) => {
					state.loading = true
				}
			)
			.addCase(
				fetchCocktails.fulfilled,
				(state: CocktailState, action: PayloadAction<any>) => {
					state.cocktails = action.payload.drinks
				}
			)
			.addCase(
				fetchCocktails.rejected,
				(state: CocktailState, action: PayloadAction<any>) => {}
			)
	}
})

export default cocktailSlice.reducer
