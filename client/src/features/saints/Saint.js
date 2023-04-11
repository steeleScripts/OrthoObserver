import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectSaintById } from './saintsApiSlice'

const Saint = ({ saintId }) => {
    const saint = useSelector(state => selectSaintById(state, saintId))

    const navigate = useNavigate()

    if (saint) {
        const handleEdit = () => navigate(`/saints/${saintId}`)

        // Not using roles may impor other data later -> const saintRolesString = saint.roles.toString().replaceAll(',', ', ')

        const cellStatus = saint.active ? '' : 'table__cell--inactive'

        return (
            <tr className="table__row saint">
                <td className={`table__cell ${cellStatus}`}>{saint.name}</td>
                <td className={`table__cell ${cellStatus}`}>
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}
export default Saint