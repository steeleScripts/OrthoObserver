import { Link } from 'react-router-dom'

const PublicNav = () => {
  return (
    <>
        <div className='public__navContainer'>
            <nav className='public__nav'>
                <ul>
                <Link to='/about' style={{ textDecoration: 'none' }}><li>About</li></Link>
                <Link to='/holy-days' style={{ textDecoration: 'none' }}><li>Holy Days</li></Link>
                <Link to='/chat' style={{ textDecoration: 'none' }}><li>Chat</li></Link>
                <Link to='/login' style={{ textDecoration: 'none' }}><li>Login</li></Link>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default PublicNav