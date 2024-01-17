import { Link } from 'react-router-dom'
import DashNav from '../../components/Dash/DashNav'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {

    const { username, isClergy, isAdmin } = useAuth()

    return (
        <section className='welcome'>            
            <h1>Welcome {username}!</h1>
            {(isAdmin) && <Link to="/dash/users">
                <div className="dash__welcomeOption" >Manage Users</div>
            </Link>}
            {(isAdmin || isClergy) && <Link to="/dash/prayers">
                <div className="dash__welcomeOption" >Manage Prayers</div>
            </Link>}
            {(isAdmin || isClergy) && <Link to="/dash/quotes">
                <div className="dash__welcomeOption" >Manage Quotes</div>
            </Link>}
            <Link to="/dash/prayers/new">
                <div className="dash__welcomeOption" >New Prayer Request</div>
            </Link>
        </section>
    )
}

export default Welcome