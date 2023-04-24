import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    entities: [],
    loading: false,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default postsSlice.reducer;