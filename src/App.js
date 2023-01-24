import React from 'react';
import './app.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Main/>
    </div>
  );
}

export default App;
