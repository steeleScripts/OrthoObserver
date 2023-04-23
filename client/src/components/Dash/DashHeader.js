import { Link } from 'react-router-dom'

const DashHeader = () => {
    
    // Functionality to import random quote pending
    const randomQuote = 'He who busies himself with the sins of others, or judges his brother on suspicion, has not yet even begun to repent or to examine himself so as to discover his own sins...'
    const saintName = 'St. Maximos the Confessor'

    return (
        <>
            <div className='dash__headerContainer'>
                <header className='dash__header'>
                    <Link to='/dash' style={{ textDecoration: 'none' }}>
                        <h1 className='dash__title'>OrthoObserver</h1>
                    </Link>
                    <p className='dash__quote'><em>&quot;{randomQuote}&quot;</em>
                        <br/>
                        <br/>
                        <div className='dash__saintName'>―{saintName}</div>            
                    </p>           
                </header>                
            </div>
        </>
    )
}

export default DashHeader