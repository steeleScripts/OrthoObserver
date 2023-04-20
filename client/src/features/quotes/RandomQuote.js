import { useGetRandomQuoteQuery } from "./quotesApiSlice"

const RandomQuote = () => {
    
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetRandomQuoteQuery()

    let content
    
    
    console.log(data)
    
    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }
    
    if (isSuccess) {
                
        content = (
            <>
                <div className='public__quote'>
                    <p><em>&quot;{data.text}&quot;</em></p>
                    <br/>
                    <br/>
                    <p className='saint_quote'>―{data.name}</p>
                </div>
            </>
        )
    }

    return content
}
export default RandomQuote