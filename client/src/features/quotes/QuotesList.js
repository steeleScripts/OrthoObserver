import { useGetQuotesQuery } from "./quotesApiSlice"
import Quote from './Quote'

const QuoteList = () => {

    const {
        data: quote,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetQuotesQuery()

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
            <div>{tableContent}</div>
        )
    }

    return content
}
export default QuoteList