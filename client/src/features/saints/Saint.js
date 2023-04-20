import PropTypes from 'prop-types'
import { useFindSaintQuery } from './saintsApiSlice'

const Saint = ({ saintId }) => {    
    const { 
        data: saint = [],            
        isSuccess,
        isError,
        error 
    } = useFindSaintQuery( saintId )

    let content

    if(isError) {
        content = error.message
    }

    if(isSuccess) {
        content = saint
    }

    return ( 
        <p className="saint_quote">{content}</p>
    )
    
}

Saint.propTypes = {
    saintId: PropTypes.string.isRequired
}

export default Saint