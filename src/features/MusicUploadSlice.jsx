import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import data from "../data";

const initialState = {
    musicArray: data,
    loading: false,
    searchedSongs:[],
    error: ""
}


export const getMusic = createAsyncThunk("getMusic", async (_, thunkApi) => {  //function to query the backend
    try {
        //  const response = axios.get('your API') 
        //  return response.data
        return data
    } catch {
        return thunkApi.rejectWithValue() //object for errors
    }
})



export const MusicUploadSlice = createSlice({
    name: "music",
    initialState: initialState,
    reducers: {
        addMusic: (state, action) => {  /// action for adding uplaod file to the musicArray
            state.musicArray = [...state.musicArray, action.payload]
        },
        search: (state, action) => {
            state.searchedSongs = state.musicArray.filter(m => m.songName.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMusic.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMusic.fulfilled, (state, action) => {
                state.loading = false;
                state.musicArray = action.payload;
            })
            .addCase(getMusic.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export const { addMusic, search} = MusicUploadSlice.actions
export default MusicUploadSlice.reducer