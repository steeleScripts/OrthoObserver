import React from 'react'
import { useState } from 'react'
import { useGetPrayersQuery } from './prayersApiSlice'

const RecentPrayers = () => {
    const {
        data,
        isSuccess,
        isLoading,
        isError,
        error
    } = useGetPrayersQuery()

    let content 

    if(isLoading) {
        content = <p>Loading...</p>
    }

    if(isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }
    
    let [counter, setCounter] = useState(5)
    setCounter = (val) => { 
        counter = val
    }

    if(isSuccess) {
        const { ids, entities } = data
        
        
        !ids ? content = "No prayers found" : null
        
        ids.length < 5 ?
            counter = setCounter(ids.length) : null
        
        let list = ids?.length ? 
            ids.map(id => <div key={id} className="prayer-box">
                <p><em>&quot;{entities[id].text}&quot;</em></p>
                <p className="quote-author">―{entities[id].username}</p></div>) 
            : null
        
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