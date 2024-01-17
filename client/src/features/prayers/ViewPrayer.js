import React from 'react'
import { useSelector } from 'react-redux'
import { selectPrayerById } from './prayersApiSlice'


const ViewPrayer = ({ prayerId }) => {
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

export default ViewPrayer