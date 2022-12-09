import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './components/template/Template';
import Home from './components/home/Home';
import Trips from './components/trip/Trips';
// import SignIn from './components/signIn/SignIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Template>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/trips" index element={<Trips />}/>
            {/* <Route path="/signin" index element={<SignIn />} /> */}
          </Routes>
        </Template>
      </BrowserRouter>
    </div>
  )
}

export default App;
