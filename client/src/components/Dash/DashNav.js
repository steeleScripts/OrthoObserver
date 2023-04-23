import { Link } from 'react-router-dom'

const DashNav = () => {
  return (
    <>
        <div className='dash__navContainer'>
            <nav className='dash__nav'>
                <ul>
                <Link to='/saints' style={{ textDecoration: 'none' }}><li>Saints</li></Link>
                <Link to='/quotes' style={{ textDecoration: 'none' }}><li>Quotes</li></Link>
                <Link to='/holy-days' style={{ textDecoration: 'none' }}><li>Holy Days</li></Link>
                <Link to='/logout' style={{ textDecoration: 'none' }}><li>Log Out</li></Link>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default DashNav