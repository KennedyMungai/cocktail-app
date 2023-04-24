import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    entities: [],
    loading: false,
}

const getPosts = createAsyncThunk('posts/getPosts', async (thunkApi) =>
{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default postsSlice.reducer;