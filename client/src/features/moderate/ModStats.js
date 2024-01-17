import React from 'react'
import { useGetTotalsQuery } from './moderateApiSlice'
import { useNavigate } from 'react-router-dom'


const ModStats = () => {
    
    const navigate = useNavigate()

    const { totals } = useGetTotalsQuery("modTotals", {
        selectFromResult: ({ data }) => ({
            prayerTotal: data?.entities[0],
            userTotal: data?.entities[1]
        }),
    })

    if(totals) {
        return (
            <>
                <button 
                    className='totals-button'
                    onClick={navigate('/dash/moderate')}>
                    <p>{totals.prayers} Flagged Prayers</p>
                </button>
                <button  
                    className='totals-button'
                    onClick={navigate('/dash/moderate')}>
                    <p>{totals.users} Flagged Users</p>
                </button>
            </>
        )
    } else return null
}

export default ModStats