import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectQuoteById } from './quotesApiSlice'

const Quote = ({ quoteId }) => {
    const quote = useSelector(state => selectQuoteById(state, quoteId))

    const navigate = useNavigate()

    if (quote) {
        const handleEdit = () => navigate(`/quotes/${quoteId}`)

        

        return (
            <>
                <div>{quote.text}</div>
                <button className="icon-button table__button" onClick={handleEdit}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
            </>
        )

    } else return null
}
export default Quote