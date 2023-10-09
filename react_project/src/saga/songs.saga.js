import { all, put, takeEvery} from 'redux-saga/effects'

import {getSongsApi,createSongsApi,updateSongsApi,deleteSongsApi} from '../apis/index';
import { getSongsSlice,addSongSlice,updateSongSlice,deleteSongSlice} from '../slice/songs.slice';
import { setSongSlice} from '../slice/song.slice';
import { CREATE_SONGS, DELETE_SONGS_BY_ID, GET_SONGS, GET_SONGS_BY_ID, UPDATE_SONGS_BY_ID } from '../types';





//get songs saga
function* getSongSaga(){
    const songs=yield getSongsApi();
    
   yield put( getSongsSlice(songs.data));
   
}


//get by Id song saga
function* getSongByIdSaga(action){
const song=yield getSongsApi(action.id);
    yield put( setSongSlice(song.data.filter((s) => s.id === action.id)))
}

//create song saga
function* createSongSaga(action){
    yield createSongsApi(action.songs);
    yield put( addSongSlice(action.songs));
}

//update song saga
function* updateSongSaga(action){
  yield updateSongsApi(action.songs);
    yield put( updateSongSlice(action.songs))
}


//delete song saga
function* deleteSongSaga(action){
    yield deleteSongsApi(action.id);
    yield put( deleteSongSlice(action.id))
}

export function* watchSongsAsync(){
    
yield takeEvery(GET_SONGS,getSongSaga);
yield takeEvery(GET_SONGS_BY_ID,getSongByIdSaga);
yield takeEvery(UPDATE_SONGS_BY_ID,updateSongSaga);
yield takeEvery(CREATE_SONGS,createSongSaga);
yield takeEvery(DELETE_SONGS_BY_ID,deleteSongSaga);

}

function *songSaga(){

    yield all([watchSongsAsync()])

}
export default songSaga;