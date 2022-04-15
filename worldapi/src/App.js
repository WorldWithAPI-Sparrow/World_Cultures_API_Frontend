
import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Background from './Img/Background.gif';
import './App.css';

function App({  }) {
 
  return (
    <div className="App" style = {{ backgroundImage: `url(${Background})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: "1400px"
  }}>
  {/* style={{backgroundImage:`url(${Background})`,  overflow: 'hidden',height: "1400px"}} */}
       <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
