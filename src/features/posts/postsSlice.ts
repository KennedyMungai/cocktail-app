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

export const fetchSingleCocktail = createAsyncThunk(
	'cocktails/fetchSingleCocktail',
	async ({ id }: { id: string }) => {
		return await axios
			.get(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${id}`
			)
			.then((res) => res.data)
	}
)

export const fetchSearchCocktail = createAsyncThunk(
	'cocktails/fetchSearchCocktail',
	async ({ search }: { search: string }) => {
		return await axios
			.get(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
			)
			.then((res) => res.data)
	}
)

interface CocktailState {
	cocktails: string[]
	cocktail: string[]
	loading: boolean
	error: any | null
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
					state.loading = false
					state.cocktails = action.payload.drinks
				}
			)
			.addCase(
				fetchCocktails.rejected,
				(state: CocktailState, action: PayloadAction<any>) => {
					state.loading = false
					state.error = action.payload
				}
			),
			builder
				.addCase(
					fetchSingleCocktail.pending,
					(state: CocktailState, action: PayloadAction<any>) => {
						state.loading = true
					}
				)
				.addCase(
					fetchSingleCocktail.fulfilled,
					(state: CocktailState, action: PayloadAction<any>) => {
						state.loading = false
						state.cocktail = action.payload.drinks
					}
				)
				.addCase(
					fetchSingleCocktail.rejected,
					(state: CocktailState, action: PayloadAction<any>) => {
						state.loading = false
						state.error = action.payload
					}
				),
			builder
				.addCase(
					fetchSearchCocktail.pending,
					(state: CocktailState) => {
						state.loading = true
					}
				)
				.addCase(
					fetchSearchCocktail.fulfilled,
					(state: CocktailState, action: PayloadAction<any>) => {
						state.loading = false
						state.cocktails = action.payload.drinks
					}
				)
				.addCase(
					fetchSearchCocktail.rejected,
					(state: CocktailState, action: PayloadAction<any>) => {
						state.loading = false
						state.error = action.payload
					}
				)
	}
})

export default cocktailSlice.reducer
