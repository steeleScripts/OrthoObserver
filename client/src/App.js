import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Missing from './components/Missing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Public />} />
          <Route path='*' element={<Missing />} />
        </Route>                    
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
