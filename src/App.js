import React from 'react';
import './index.css';
import Header from './Components/Header/index.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from '../src/Components/Footer/Footer.jsx';
import Form from '../src/Components/Form/Form.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {


  return (

  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reserve' element={<Form/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
      
  );
}

export default App;
