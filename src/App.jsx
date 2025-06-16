import React from 'react'
import Home from './views/Home'
import { Routes, Route } from 'react-router';
import Login from './components/LoginModal';
import Browse from './views/Browse';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/browse' element={<Browse/>}></Route>
    </Routes>
  )
}

export default App