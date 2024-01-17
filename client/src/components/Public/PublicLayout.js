import { Outlet } from 'react-router-dom'
import PublicHeader from './PublicHeader'
import PublicFooter from './PublicFooter'
import DashHeader from '../Dash/DashHeader'
import useAuth from '../../hooks/useAuth'

const Layout = () => {
    const { username, status } = useAuth()
    let header

    if(!username) {
        header = <PublicHeader />
    } else {
        header = <DashHeader /> 
    }
    
    return (
        <>
            <div className="wrapper">
                {header}
                <Outlet />
                <PublicFooter />
            </div>
        </>
    )
}

export default Layout