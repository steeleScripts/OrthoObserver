import RecentPrayers from "../../features/prayers/RecentPrayers"

const PublicMain = () => {    

    return (
        <main className='public__main'>
            <h2 className='public__mainTitle'>Welcome</h2>
            <div className='public__mainContent'>
                <p>This site is a work in progress, constructive feedback is appreciated!</p>                
                <br/>
                <RecentPrayers />
            </div>
        </main>        
    )
}

export default PublicMain