import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Main/Home';
import Search from './Components/Main/Search';
import Footer from './Components/Sub/Footer';
import Nav from './Components/Sub/Nav';
import Trending from './Components/Main/Trending';
import BestSeller from './Components/Main/BestSeller';
import Shop from './Components/Main/Shop';

function App() {
  return (
    <div className='app'>
      <Router>
        <Nav />
        <Routes>
        <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} />
          <Route path='./shop' element={<Shop/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      <Shop/>
    </div>
  );
}

export default App;
