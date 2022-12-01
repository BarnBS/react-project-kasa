import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import HousingSheet from './pages/Housing-Sheet/Housing-Sheet';
import About from './pages/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Routes>

        <Route exact path = "/" element = {<Home />} />
        <Route path = "/housing/:id" element = {<HousingSheet />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "*" element = {<Error404 />} />

      </Routes>
      
    </Router>
  </React.StrictMode>
);
