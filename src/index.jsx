//This page contains the routing logic for the website.

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';

import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import HousingSheet from './pages/Housing-Sheet/Housing-Sheet';
import About from './pages/About/About';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Header/>

      <Routes>

        <Route exact path = "/" element = {<Home />} />
        <Route path = "/housing/:id" element = {<HousingSheet />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "*" element = {<Error404 />} />

      </Routes>

      <Footer/>
      
    </Router>
  </React.StrictMode>
);
