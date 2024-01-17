import RecentPrayers from "../../features/prayers/RecentPrayers"
import PublicHeader from "./PublicHeader"
import PublicFooter from "./PublicFooter"
import PublicMain from "./PublicMain"
import { Outlet } from "react-router-dom"

const Public = () => {
  const content = (
    <>
      <section className='public'>
        <PublicMain >
          <Outlet />
        </PublicMain>
      </section>
    </>
)
  return content
}

export default Public