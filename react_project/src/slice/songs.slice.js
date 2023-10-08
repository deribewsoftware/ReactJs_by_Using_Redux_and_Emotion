import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
    name:'songs',
    initialState:[ {
        id:"",
        title:"",
        artist:"",
        artwork:"",
    }],
    reducers:{

        getSongsSlice:(state,action)=>{
            state=action.payload;
            return state;
        },
        
        addSongSlice:(state,action)=>{
            state.push(action.payload)
            return state
        },
        updateSongSlice:(state,action)=>{
            state=state.map((songData)=>songData.id===action.payload.id?action.payload:songData)
            return state
        },

        deleteSongSlice:(state,action)=>{
            state.filter(i => i.id !== action.payload)
            return state
        },
    }
});

export const {setSongSlice,getSongsSlice,addSongSlice,updateSongSlice,deleteSongSlice}=songSlice.actions;
export default songSlice.reducer;