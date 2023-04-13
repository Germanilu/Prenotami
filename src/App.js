import React from 'react';
import './index.css';
import Header from './Components/Header/index.jsx';
import Home from './Components/Home/Home.jsx';
import ChooseService from './Components/ChooseService/';
import Footer from '../src/Components/Footer/Footer.jsx';
import PassportForm from './Components/Form/PassportForm/Form.jsx';
import CieForm from './Components/Form/CieForm/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {


  return (

  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reserve-passport' element={<PassportForm/>}/>
      <Route path='/reserve-cie' element={<CieForm/>}/>
      <Route path='/choose-service' element={<ChooseService/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
      
  );
}

export default App;
