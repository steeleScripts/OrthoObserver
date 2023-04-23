import { Link } from 'react-router-dom'
import RandomQuote from '../../features/quotes/RandomQuote'
import PublicNav from './PublicNav'

export default function PublicHeader() { 
    
    return (
        <>            
            <header className='public__header'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 className='public__title'>OrthoObserver</h1>
                </Link>    
            </header>            
            <RandomQuote />      
            <PublicNav />        
        </>
    )
}