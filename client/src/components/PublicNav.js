import { Link } from 'react-router-dom'

const PublicNav = () => {
  return (
    <>
        <div className='public__navContainer'>
            <nav className='public__nav'>
                <ul>
                <Link to='/calendar' style={{ textDecoration: 'none' }}><li>Liturgical Calendar</li></Link>
                <Link to='/prayer' style={{ textDecoration: 'none' }}><li>Prayer Requests</li></Link>
                <Link to='/about' style={{ textDecoration: 'none' }}><li>About</li></Link>                
                <Link to='/login' style={{ textDecoration: 'none' }}><li>Login</li></Link>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default PublicNav