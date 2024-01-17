import { Link } from 'react-router-dom'

const PublicNav = () => {
  return (
    <>
        <div className='public__navContainer'>
            <nav className='public__nav'>
                <ul>
                  <Link to='/' style={{ textDecoration: 'none' }}><li>Home</li></Link>
                  <Link to='/ortho' style={{ textDecoration: 'none' }}><li>Ortho</li></Link>
                  <Link to='/prayers' style={{ textDecoration: 'none' }}><li>Requests</li></Link>
                  <Link to='/about' style={{ textDecoration: 'none' }}><li>About</li></Link>                
                  <Link to='/login' style={{ textDecoration: 'none' }}><li>Login</li></Link>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default PublicNav