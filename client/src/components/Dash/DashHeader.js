import { Link } from 'react-router-dom'
import RandomQuote from '../../features/quotes/RandomQuote'
import DashNav from '../Dash/DashNav'


const DashHeader = () => {    

    return (
        <>            
            <header className='public__header'>
                <Link to='/dash' style={{ textDecoration: 'none' }}>
                    <h1 className='public__title'>OrthoObserver</h1>
                </Link>    
            </header>            
            <RandomQuote />      
            <DashNav />        
        </>
    )
}

export default DashHeader