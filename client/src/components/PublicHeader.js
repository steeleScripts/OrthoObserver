import { Link } from 'react-router-dom'

export default function PublicHeader() { 
    
    return (
        <>            
            <header className='public__header'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 className='public__title'>OrthoObserver</h1>
                </Link>    
            </header>        
        </>
    )
}