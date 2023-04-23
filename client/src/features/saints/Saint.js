import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectSaintById } from './saintsApiSlice'

const Saint = ({ saintId }) => {    
    

   
    return ( 
        <p className="saint_quote">{saintId}</p>
    )
    
}

Saint.propTypes = {
    saintId: PropTypes.string.isRequired
}

export default Saint