import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectSaintById } from './saintsApiSlice'

const Saint = ({ saintId }) => {
    const saint = useSelector(state => selectSaintById(state, saintId))

    const navigate = useNavigate()

    if (saint) {
        const handleEdit = () => navigate(`/dash/saints/${saintId}`)

        return (
            <div className='saint__cell'>
                <h2>{saint.name}</h2>
                <button className="icon-button table__button" onClick={handleEdit} />
            </div>
        )

    } else return null
}
export default Saint