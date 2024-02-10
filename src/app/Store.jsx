import { configureStore } from '@reduxjs/toolkit'
import musicReducer from "../features/MusicUploadSlice"
export const Store = configureStore({
    reducer: {
        music: musicReducer
    },
})