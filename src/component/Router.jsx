import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Home/Home'
import Main from './Main/Main'
import Footer from './Footer/Footer';

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path="/footer" element={<Footer/>}/>

        </Routes>
    </BrowserRouter>
  )
}
