import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'

const UserCell = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId))

    const navigate = useNavigate()

    if (user) {
        const handleEdit = () => navigate(`/dash/users/${userId}`)

        const userRolesString = user.roles.toString().replaceAll(',', ', ')

        const cellStatus = user.active ? '' : 'table__cell--inactive'

        return (
            <>
                <div key={user.id} className="user-box">
                    <p className="user-username">by <strong>{user.username}</strong></p>
                    <p className="user-roles">{user.roles}</p>
                    <div className="user-createdAt">                        
                        <p className="user-time">Member since: {user.createdAt}</p>
                        
                    </div>
                </div>
            </>
        )

    } else return null
}
export default UserCell