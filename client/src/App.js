import { Routes, Route } from 'react-router-dom'
import Layout from './components/Public/PublicLayout'
import Public from './components/Public/Public'
import PublicAbout from './components/Public/PublicAbout'
import PublicPrayers from './components/Public/PublicPrayers'
import Missing from './components/Missing'
import DashLayout from './components/Dash/DashLayout';
import UsersList from './features/users/UsersList'
import QuotesList from './features/quotes/QuotesList'
import EditUser from './features/users/EditUser'
import EditPrayer from './features/prayers/EditPrayer'
import NewPrayer from './features/prayers/NewPrayer'
import NewUserForm from './features/users/NewUserForm'
import Prefetch from './features/auth/Prefetch'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import PrayersList from './features/prayers/PrayersList'
import PersistLogin from './features/auth/PersistLogin'


function App() {
  return (        
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='*' element={<Missing />} />
        <Route path='about' element={<PublicAbout />} />
        <Route path='prayers' element={<PublicPrayers />} />
        <Route path='login' element={<Login />} />

        <Route element={<PersistLogin />} >
          <Route element={<Prefetch />} >
            <Route path='dash' element={<DashLayout />} >

              <Route index element={<Welcome />} />

              <Route path='users'>
                <Route index element={<UsersList />} />
                <Route path=":id" element={<EditUser />} />
                <Route path="new" element={<NewUserForm />} />
              </Route>

              <Route path='prayers'>
                <Route index element={<PrayersList />} />
              </Route>

              <Route path='quotes'>
                <Route index element={<QuotesList />} />
              </Route>

            </Route>{/*End of dash*/}
          </Route>
        </Route>

      </Route>                    
    </Routes>
  );
}

export default App;
