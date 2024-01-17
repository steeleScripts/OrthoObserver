import React from 'react'
import { selectLogById } from './moderateApiSlice'
import { useSelector } from 'react-redux'

const options = { 
    timeStyle: 'short'
}

const LogEntry = ({ logId }) => {
    const logEntry = useSelector(state => selectLogById(state, logId))
    
    if(logEntry) {
        const date = new Date(logEntry.createdAt)

        return (
            <>
               <div key={logEntry.id} className="log-entry">
                   <p className="log-user">by <strong>{logEntry.username}</strong></p>
                   <p className="log-event">{logEntry.event}</p>
                   <p className="log-time">{date.toDateString()} at {date.toLocaleTimeString('en-us', options)}</p>
               </div>
           </>
       )
    } else return null 

    
}

export default LogEntry