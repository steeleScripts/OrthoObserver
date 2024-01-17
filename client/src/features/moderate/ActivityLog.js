import React from 'react'
import { useGetActivityLogQuery } from './moderateApiSlice'
import LogEntry from './LogEntry'

const ActivityLog = () => {

    const {
        data: log,
        isSuccess,
        isLoading,
        isError,
        error
    } = useGetActivityLogQuery()

    let content

    if(isLoading) {
        content = <p>Loading...</p>
    }

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if(isSuccess) {
        const { ids } = log 

        content  = ids?.length
        ? log.map(logId => <LogEntry key={logId} logId={logId} />)
        : null
    }

    return (
        <div>{content}</div>
    )
}

export default ActivityLog