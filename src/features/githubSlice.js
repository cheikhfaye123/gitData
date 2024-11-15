import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchGithubUser = createAsyncThunk(
    'github/fetchGithubUser',
    async (username, thunkAPI) => {
        try {
            const response = await axios.get(`${GITHUB_API_URL}/${username}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);

const githubSlice = createSlice({
    name: 'github',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGithubUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchGithubUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchGithubUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default githubSlice.reducer;
