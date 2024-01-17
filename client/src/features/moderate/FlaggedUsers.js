import React from 'react'
import { useGetFlaggedUsersQuery } from './moderateApiSlice'
import UserCell from '../users/UserCell'

const FlaggedUsers = () => {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetFlaggedUsersQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = users

        const tableContent = ids?.length
            ? ids.map(userId => <UserCell key={userId} userId={userId} />)
            : null

        content = (
            <div>{tableContent}</div>
        )
    }

    return (
        <div>FlaggedUsers</div>
    )
}

export default FlaggedUsers