import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMusic = createAsyncThunk("getMusic", async (_, thunkApi) => {  //function to query the backend 
    try {
        //  const response = axios.get('your API') 
        //  return response.data   
        return [
            {
                id: Math.random(),
                songName: "halo",
                artistName: "Beyonce",
                trackNumber: 1,
                file: "ADAM_ZHUREK.mp3"
            },
            {
                id: Math.random(),
                songName: "love",
                artistName: "Omer Balik",
                trackNumber: 2,
                file: "ADAM_ZHUREK.mp3"
            }
        ]
    } catch {
        return thunkApi.rejectWithValue() //object for errors
    }
})


const initialState = {
    musicArray: [],
    loading: false,
    searchProducts:[],
    searchInput:"",
    error: ""
}
export const MusicUploadSlice = createSlice({
    name: "music",
    initialState: initialState,
    reducers: {
        addMusic: (state, action) => {  /// action for adding uplaod file to the musicArray
            state.musicArray = [...state.musicArray, { id: Math.random(), songName: action.payload.songName, artistNameName: action.payload.artistName, trackNumber: action.payload.trackNumber, file: action.payload.file }]
        }, 
        search: (state, action) => {
            const filteredProducts = state.musicArray.filter(product => product.songName.toLowerCase().includes(action.payload.toLowerCase()))
            state.searchProducts = filteredProducts
            state.searchInput = action.payload

        },
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

export const { addMusic ,search} = MusicUploadSlice.actions
export default MusicUploadSlice.reducer