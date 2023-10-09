


import CardListLayout from './pages/cardListLayout';
import EditSong from './pages/edit.song';
import MusicPlayer from './pages/musicPlayer';
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import EditRedirect from './pages/edit.redirect.page';
import DeletePage from './pages/delete.songs';

function App() {

 
  return (
    <div className="App" style={{backgroundColor: '#ecf0f1'}}>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<CardListLayout />} />
          <Route path="edit/:editId" element={<EditSong/>}/>
          <Route path='redirect/edit/:redirectId' element={<EditRedirect/>}/>
          <Route path="delete/" element={<DeletePage/>}/>
          <Route path="play/:songId" element={<MusicPlayer/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;

const Root=()=>{
  return(
    <>
<Outlet></Outlet>

    </>
  );
}