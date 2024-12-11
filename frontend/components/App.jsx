import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import SignedIn from './SignedIn.jsx';
import LogIn from './LogIn.jsx';
import { Main } from './Main.jsx';

const App = () => {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<SignedIn/>} />
      <Route path='/Login'  element={<LogIn/>} />
      <Route path='/Main'  element={<Main/>} />
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
