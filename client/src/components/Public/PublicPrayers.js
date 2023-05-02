import RecentPrayers from "../../features/prayers/RecentPrayers"
import PublicHeader from "./PublicHeader"
import PublicFooter from "./PublicFooter"

const PublicPrayers = () => {

    //Add Clergy Prayer Features

    return (
        <>
            <section className='public'>

                <PublicHeader />
                <main className='public__main'>
                        <h1 className='public__mainTitle'>Prayers</h1>
                        <div className='public__mainContent' >
                            <RecentPrayers />                            
                        </div>
                </main>
                <PublicFooter />
            </section>
        </>
  )
}

export default PublicPrayers