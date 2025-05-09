import RecentPrayers from "../../features/prayers/RecentPrayers"

const PublicPrayers = () => {

    //Add Clergy Prayer Features

    return (
        <>
            <section className='public'>
                <main className='public__main'>
                        <h2 className='public__mainTitle'>Prayer Requests</h2>
                        <div className='public__mainContent' >
                            <RecentPrayers />                            
                        </div>
                </main>
            </section>
        </>
  )
}

export default PublicPrayers