import React from 'react'
import { Link } from 'react-router-dom'

const DashHeader = () => {
    
    // Functionality to import random quote pending
    const randomQuote = 'He who busies himself with the sins of others, or judges his brother on suspicion, has not yet even begun to repent or to examine himself so as to discover his own sins...'
    const saintName = 'St. Maximos the Confessor'

    return (
        <>
            <div className='public__headerContainer'>
                <header className='public__header'>
                    <Link to='/dash' style={{ textDecoration: 'none' }}>
                        <h1 className='public__title'>OrthoObserver</h1>
                    </Link>
                    <p className='public__quote'><em>"{randomQuote}"</em>
                        <br/>
                        <br/>
                        <div className='public__saintName'>―{saintName}</div>            
                    </p>           
                </header>
                <nav className='public__nav'>
                    <ul>
                        <li>Home</li>
                        <li>Quotes</li>
                        <li>Saints</li>
                        <li>Holy Days</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default DashHeader