import { Link } from 'react-router-dom'

export default function PublicHeader() { 
    // Functionality to import random quote pending
    const randomQuote = 'sins...'
    const saintName = 'St. Maximos the Confessor'


    return (
        <>
            <div className="public__headerContainer">
                <header className='public__header'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h1 className='public__title'>OrthoObserver</h1>
                    </Link>
                    <p className='public__quote'><em>&quot;{randomQuote}&quot;</em>
                        <br/>
                        <br/>
                        <div className='public__saintName'>―{saintName}</div>            
                    </p>           
                </header>
            </div>
        </>
    )
}