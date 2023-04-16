import React from 'react';
import './index.css';
import Header from './Containers/Header/index.jsx';
import Home from './Containers/Home/Home.jsx';
import ChooseService from './Containers/ChooseService/';
import Footer from '../src/Containers/Footer/Footer.jsx';
import PassportForm from './Containers/Form/PassportForm/Form.jsx';
import CieForm from './Containers/Form/CieForm/';
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
