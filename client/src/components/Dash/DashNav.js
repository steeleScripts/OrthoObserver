import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSendLogoutMutation } from '../../features/auth/authApiSlice'
import useAuth from '../../hooks/useAuth'

const DashNav = () => {

  const navigate = useNavigate()

  const { isClergy, isAdmin } = useAuth()

  const [sendLogout, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useSendLogoutMutation()

  useEffect(() => {
      if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <p>Logging Out...</p>

  if (isError) return <p>Error: {error.data?.message}</p>

  return (
    <>
        <div className='public__navContainer'>
            <nav className='public__nav'>
                <ul>
                  <Link to='/dash/prayers' style={{ textDecoration: 'none' }}><li>Prayers</li></Link>
                  {(isClergy || isAdmin) && <Link to='/dash/moderate' style={{ textDecoration: 'none' }}><li>Moderate</li></Link>}
                  {(isClergy || isAdmin) && <Link to='/dash/users' style={{ textDecoration: 'none' }}><li>Users</li></Link>}
                  {(isClergy || isAdmin) && <Link to='/dash/quotes' style={{ textDecoration: 'none' }}><li>Quotes</li></Link>}
                  <Link onClick={sendLogout} style={{ textDecoration: 'none' }}><li>Log Out</li></Link>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default DashNav