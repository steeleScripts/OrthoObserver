import React from 'react'
import { useState } from 'react'
import { useGetRecent5PrayersQuery } from './prayersApiSlice'

const RecentPrayers = () => {
    const {
        data,
        isSuccess,
        isLoading,
        isError,
        error
    } = useGetRecent5PrayersQuery()

    let content 

    if(isLoading) {
        content = <p>Loading...</p>
    }

    if(isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if(isSuccess) {
        const { ids } = data
        
        !ids ? content = "No prayers found" : null

        const list = data.map(prayer => {
            let date = new Date(prayer.createdAt)

            return (
                <div key={prayer.id} className="prayer-box">
                    <p className="prayer-user">by <strong>{prayer.username}</strong></p>
                    <p className="prayer-text">&quot;{prayer.text}&quot;</p>
                    <p className="prayer-time">{date.toDateString()} at {date.toLocaleTimeString()}</p>
                </div>
            )
        })
        
        content = list
    }

    return (
        <div className="public__prayers">
            <h3 className="public__prayersTitle">Recent Prayers</h3>
            <div className="public__prayersContent">{content}</div>
        </div>
    )
}

export default RecentPrayers