import { useGetQuoteQuery } from "./quoteApiSlice"
import Quote from './Quote'

const QuoteList = () => {

    const {
        data: quote,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetQuoteQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = quote

        const tableContent = ids?.length
            ? ids.map(quoteId => <Quote key={quoteId} quoteId={quoteId} />)
            : null

        content = (
            <table className="table table--quote">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th quote__quotename">Quotename</th>
                        <th scope="col" className="table__th quote__roles">Roles</th>
                        <th scope="col" className="table__th quote__edit">Edit</th>
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
export default QuoteList