import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import SignedIn from './SignedIn.jsx';
import Main from './Main.jsx';
import Home from './Home.jsx';
import Layout from './Layout.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Misc' element={<SignedIn />} />
          <Route path='/Main' element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
