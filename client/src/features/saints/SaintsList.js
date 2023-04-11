import { useGetSaintsQuery } from "./saintsApiSlice"
import Saint from './Saint'

const SaintsList = () => {

    const {
        data: saints,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSaintsQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = saints

        const tableContent = ids?.length
            ? ids.map(saintId => <Saint key={saintId} saintId={saintId} />)
            : null

        content = (
            <table className="table table--saints">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th saint__saintname">Saintname</th>
                        <th scope="col" className="table__th saint__roles">Roles</th>
                        <th scope="col" className="table__th saint__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default SaintsList