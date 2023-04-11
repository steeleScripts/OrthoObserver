import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Missing from './components/Missing'
import DashLayout from './components/DashLayout';
import Login from './components/Login'


function App() {
  return (        
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='*' element={<Missing />} />
        <Route path='login' element={<Login />} />

        <Route path='dash' element={<DashLayout />} />

      </Route>                    
    </Routes>
  );
}

export default App;
