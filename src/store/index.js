import { configureStore } from '@reduxjs/toolkit';
import githubReducer from '../features/githubSlice';

const store = configureStore({
    reducer: {
        github: githubReducer,
    },
});

export default store;
