import RecentPrayers from "../../features/prayers/RecentPrayers"
import PublicHoliday from "../../features/holidays/PublicHoliday"
import PublicHeader from "./PublicHeader"
import PublicFooter from "./PublicFooter"

const Public = () => {
  const content = (
    <>
      <section className='public'>
        <PublicHeader />
        <main className='public__main'>
            <h1 className='public__mainTitle'>Home</h1>
            <div className='public__mainContent' >
                <RecentPrayers />
                <PublicHoliday />
            </div>
        </main>
        <PublicFooter />
      </section>
    </>
)
  return content
}

export default Public