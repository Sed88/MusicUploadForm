import { configureStore } from '@reduxjs/toolkit'
import musicReducer from "../features/MusicUploadSlice"
export const Store = configureStore({
    // Specify the reducer for the store
    reducer: {
        music: musicReducer //this is MusicUplaod slice
    },
})