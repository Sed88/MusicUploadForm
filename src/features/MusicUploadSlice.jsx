import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMusic = createAsyncThunk("getMusic", async (_, thunkApi) => {
    try {
        //  const response = axios.get('')
        //  return response.data   
        return [
            {
                id: Math.random(),
                songName: "halo",
                artistName: "Beyonce",
                trackNumber: 1
            },
            {
                id: Math.random(),
                songName: "love",
                artistName: "Omer Balik",
                trackNumber: 2
            }
        ]
    } catch {
        return thunkApi.rejectWithValue()
    }
})


const initialState = {
    musicArray: [],
    loading: false,
    error: ""
}
export const MusicUploadSlice = createSlice({
    name: "music",
    initialState: initialState,
    reducers: {
        addMusic: (state, action) => {
            state.musicArray = [...state.musicArray, { id: Math.random(), songName: action.payload.songName, artistNameName: action.payload.artistNameName, trackNumber: action.payload.trackNumber }]
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

export const { addMusic } = MusicUploadSlice.actions
export default MusicUploadSlice.reducer