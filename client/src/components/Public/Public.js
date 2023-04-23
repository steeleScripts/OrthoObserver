import PublicHeader from './PublicHeader'
import PublicMain from './PublicMain'
import PublicFooter from './PublicFooter'

const Public = () => {
  const content = (
    <>
        <section className='public'>
            <PublicHeader />
            <PublicMain />
            <PublicFooter /> 
        </section>
    </>
  )
  return content
}

export default Public