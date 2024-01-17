import { useSelector } from 'react-redux'
import { selectPrayerById } from './prayersApiSlice'
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const options = { 
    timeStyle: 'short'
}

const Prayer = ({ prayerId }) => {
    const prayer = useSelector(state => selectPrayerById(state, prayerId))
        
    if (prayer) {                
        let date = new Date(prayer.createdAt)
        let prayForCount = prayer.prayFor

        return (
            <>
                <div key={prayer.id} className="prayer-box">
                    <p className="prayer-user">by <strong>{prayer.username}</strong></p>
                    <p className="prayer-text">&quot;{prayer.text}&quot;</p>
                    <div className="prayer-stats">
                        <FontAwesomeIcon icon={faHandsPraying} />
                        <p>{prayForCount}</p>
                        <p className="prayer-time">{date.toDateString()} at {date.toLocaleTimeString('en-us', options)}</p>
                    </div>
                </div>
            </>
        )
    } else return null
}
export default Prayer