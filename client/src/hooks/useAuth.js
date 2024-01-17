import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isClergy = false
    let isAdmin = false
    let status = "User"

    if (token) {
        const decoded = jwtDecode(token)
        const { username, roles } = decoded.UserInfo

        isClergy = roles.includes('Clergy')
        isAdmin = roles.includes('Admin')

        if (isClergy) status = "Clergy"
        if (isAdmin) status = "Admin"

        return { username, roles, status, isClergy, isAdmin }
    }

    return { username: '', roles: [], isClergy, isAdmin, status }
}
export default useAuth