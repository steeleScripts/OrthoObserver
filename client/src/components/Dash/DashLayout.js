import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import DashNav from './DashNav'
import { Outlet } from 'react-router-dom'


const DashLayout = () => {
  return (
    <>
      <section className="dash">
        <DashHeader />
        
        <main className='public__main'>
          <h1 className='public__mainTitle'>Admin Dashboard</h1>
          <div className='public__mainContent' >
            <Outlet />
          </div>
        </main> 
          
          <DashFooter />
      </section>
    </>
    
  )
}

export default DashLayout