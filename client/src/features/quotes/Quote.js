import { useSelector } from 'react-redux'
import { selectQuoteById } from './quotesApiSlice'
import Saint from '../saints/Saint'
import PropTypes from 'prop-types'

const Quote = ({ quoteId }) => {
    const quote = useSelector(state => selectQuoteById(state, quoteId))
        
    if (quote) {                
        return (
            <>
                <p className='quote_text'><em>&quot;{quote.text}&quot;</em></p>
                <br />
                <br />
                <Saint key={quote.saint} saintId={quote.saint} className='saint_quote' />
            </>
        )
    } else return null
}

Quote.propTypes = {
    quoteId: PropTypes.string.isRequired
}

export default Quote