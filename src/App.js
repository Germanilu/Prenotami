import React from 'react';
import './index.css';
import Header from './Components/Header/index.jsx';
import Home from './Components/Home/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (

  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
      
  );
}

export default App;
