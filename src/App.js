import React from 'react';
import './scss/app.scss';
import Header from './components/Header';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
//import pizzas from './assets/pizzas.json';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  // const pathname=window.location.pathname;

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          {/* {pathname==="/" && <Home />} */}
          <Routes> 
            <Route path="/" element={<Home />}/>
            <Route path="/Cart" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
