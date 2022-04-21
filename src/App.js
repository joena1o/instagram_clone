import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeRoute from './Routes/homeroute';
import Auth from './Routes/Authenication';
import NewPost from './Routes/newpost';
import Profile from './Routes/Profile';
import Search from './Routes/Search';
import PostStat from './Routes/poststatus';
import StatusView from './Routes/statusview';
import ProfileDP from './Routes/profileDp';


function App(){

  

 
 
  return(
    <div className='app'> 


    <BrowserRouter>

    <Routes>

      <Route path='/' exact element={<Auth />} />

      <Route path='/home' exact element={<HomeRoute />} />

      <Route path='/post' element={<NewPost />} />

      <Route path='/profile' element={<Profile />} />

      <Route path='/search' element={<Search />} />

      <Route path='/poststat' element={<PostStat />} />

      <Route path='/status/:user' element={<StatusView />} />

      <Route path='/dp' element={<ProfileDP />} />

    </Routes>
     

     </BrowserRouter>

    </div>
  );

}


export default App;
