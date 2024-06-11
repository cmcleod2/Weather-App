import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Header from './components/header';
import Current from './components/current';
import Home from './components/home';
import Footer from './components/footer';
import Forecast from './components/forecast';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  min-height: 100vh;
  min-width: 100vw;
`

function App() {
  const [zipcode, setZipcode] = useState('84604');

  return (
    <Router>
      <MainContainer>
        <Header zipcode={zipcode} setZipcode={setZipcode}/>
        <Routes>
          <Route path='/current/:zip' element={<Current />}/>
          <Route path='/forecast/:zip' element={<Forecast />}/>
          <Route path='/' element={<Home zipcode={zipcode} setZipcode={setZipcode}/>}/>
          <Route render={() => <Navigate to="/" />} />
        </Routes>
        <Footer />
      </MainContainer>
    </Router>
  );
}

export default App;
