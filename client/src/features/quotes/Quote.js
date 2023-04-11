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

        // Not using roles may impor other data later -> const quoteRolesString = quote.roles.toString().replaceAll(',', ', ')

        const cellStatus = quote.active ? '' : 'table__cell--inactive'

        return (
            <tr className="table__row quote">
                <td className={`table__cell ${cellStatus}`}>{quote.name}</td>
                <td className={`table__cell ${cellStatus}`}>
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}
export default Quote