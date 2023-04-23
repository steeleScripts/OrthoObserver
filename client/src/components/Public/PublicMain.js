import PublicHoliday from "../../features/holidays/PublicHoliday"
import RecentPrayers from "../../features/prayers/RecentPrayers"

const PublicMain = () => {    

    return (
        <main className='public__main'>
            <h1 className='public__mainTitle'>Home</h1>
            <div className='public__mainContent' >
                <RecentPrayers />
                <PublicHoliday />
            </div>
        </main>        
    )
}

export default PublicMain