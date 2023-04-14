import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import DashNav from './DashNav'

const DashLayout = () => {
  return (
    <>
        <DashHeader />
        <DashNav />
        <div className='dash-container'>
            <Outlet />
        </div>
        <DashFooter />
    </>
    
  )
}

export default DashLayout