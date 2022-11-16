import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";

import Header from '../components/Header';
import Countries from '../pages/Countries';
import Country from '../pages/Country';


const AppRoute = () => {
  return (
    <BrowserRouter>
  <Header/>
    <Routes>
       <Route element={<Countries />} path='*' />
   <Route element={<Country />} path='/Countries/:name' />
    </Routes>
    </BrowserRouter>

    )
}

export default AppRoute