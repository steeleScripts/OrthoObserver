
import { Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import DashHeader from './DashHeader'
import PublicFooter from '../Public/PublicFooter'

const DashLayout = () => {
  const { username, status } = useAuth()
  const navigate = useNavigate()
  

  if(!username) {
    navigate('/login')
  }

  return (
    <>
      <div className="wrapper">
        <section className="dash">
          <DashHeader />
          <main className='public__main'>
            <h1 className='public__mainTitle'>{`${status} Dashboard`}</h1>
            <div className='public__mainContent' >
              <Outlet />
            </div>
          </main> 
          <PublicFooter />
        </section>
      </div>
    </>
    
  )
}

export default DashLayout