import { createSlice } from "@reduxjs/toolkit";

const Song = createSlice({
    name: 'song',
    initialState: {
        id: 0,
        title: '',
        artist: '',
        artwork: '',
        url:''
    },
    reducers: {
        setSongSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
});
    export const { setSongSlice } = Song.actions
export default Song.reducer;