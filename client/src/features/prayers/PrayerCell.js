import { useSelector } from 'react-redux'
import { selectPrayerById } from './prayersApiSlice'

const Prayer = ({ prayerId }) => {
    const prayer = useSelector(state => selectPrayerById(state, prayerId))
        
    if (prayer) {                
        return (
            <>
                <p>{prayer.text}</p>
                <p>{prayer.username}</p>
            </>
        )
    } else return null
}
export default Prayer