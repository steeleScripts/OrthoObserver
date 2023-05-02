import { Link } from 'react-router-dom'
import DashNav from '../../components/Dash/DashNav'

const Welcome = () => {

    return (
        <section className='welcome'>            
            <h1>Welcome!</h1>
            <Link to="/dash/users">
                <div className="dash__welcomeOption" >Manage Users</div>
            </Link>
            <Link to="/prayers">
                <div className="dash__welcomeOption" >Manage Prayers</div>
            </Link>
            <Link to="/quotes">
                <div className="dash__welcomeOption" >Manage Quotes</div>
            </Link>
            
        </section>
    )
}

export default Welcome