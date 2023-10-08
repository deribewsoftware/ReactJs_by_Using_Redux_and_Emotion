import axios from 'axios'

axios.defaults.baseURL='http://localhost:3031';


//get Songs api lis
export const getSongsApi=async()=>axios.get('/songs')


//get Songs Api by Id
export const getSongsApiById=async(id)=>axios.get(`/songs/${id}`)



//Create Song Api
export const createSongsApi=async(song)=>axios.post('/songs',song)


//Update Song Api By Id
export const updateSongsApi=async(song)=>axios.put(`/songs/${song.id}`,song)



//Delete Song Api By Id
export const deleteSongsApi=async(id)=>axios.delete(`/songs/${id}`)