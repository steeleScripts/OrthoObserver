import { Routes, Route } from 'react-router-dom'
import Layout from './components/Public/PublicLayout'
import Public from './components/Public/Public'
import Missing from './components/Missing'
import DashLayout from './components/Dash/DashLayout';
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import SaintsList from './features/saints/SaintsList'
import QuotesList from './features/quotes/QuotesList'


function App() {
  return (        
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='*' element={<Missing />} />
        <Route path='login' element={<Login />} />

        <Route path='dash' element={<DashLayout />} >

          <Route index element={<Welcome />} />

          <Route path='saints'>
            <Route index element={<SaintsList />} />
          </Route>

          <Route path='quotes'>
            <Route index element={<QuotesList />} />
          </Route>
        </Route>

      </Route>                    
    </Routes>
  );
}

export default App;
