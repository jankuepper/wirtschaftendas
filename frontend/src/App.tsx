import React from 'react';
import { Grommet, Nav, Sidebar } from 'grommet';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import HeaderWrapper from './components/HeaderWrapper';
import TestPage from './pages/TestPage';

function App() {
  return (
    <Grommet>
      <HeaderWrapper />
      <Sidebar>
        <Nav>

        </Nav>
      </Sidebar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/test' element={<TestPage/>} />
        </Routes>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
