import { useSelector } from 'react-redux'
import { selectPrayerById } from './prayersApiSlice'

const options = { 
    timeStyle: 'short'
}

const OrthoPrayerCell = ({ prayerId }) => {
    const prayer = useSelector(state => selectPrayerById(state, prayerId))
    
    if (prayer) {   
        let split = prayer.text.indexOf('%')             
        let title = prayer.text.substring(0, split)
        let quote = prayer.text.substring(split, -1)

        return (
            <>
                <div className="ortho-box">
                    <p>test</p>
                    <p className='ortho-title'>test{title}</p>
                    <p className='ortho-text'>test{quote}</p>
                </div>
            </>
        )
    } 
    else {
        return (
            <>
                <div className="ortho-box">
                    <p>{prayerId}</p>
                    <p className='ortho-title'>No Prayer Found!</p>
                </div>
            </>
        )
    }
}

export default OrthoPrayerCell