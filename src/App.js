import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
        <Switch>
          <Route path='/current/:zip'>
            <Current />
          </Route>
          <Route path='/forecast/:zip'>
            <Forecast />
          </Route>
          <Route path='/'>
            <Home zipcode={zipcode} setZipcode={setZipcode}/>
          </Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </MainContainer>
    </Router>
  );
}

export default App;
