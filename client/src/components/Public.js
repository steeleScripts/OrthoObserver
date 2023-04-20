import RandomQuote from '../features/quotes/RandomQuote'
import PublicHeader from './PublicHeader'
import PublicNav from './PublicNav'

const Public = () => {
  const content = (
    <>
        <section className='public'>
            <PublicHeader />
            <RandomQuote />      
            <PublicNav />
            <div className='public__mainContainer' >
              <main className='public__main'>
                  <h2>Home</h2>
              </main>
            </div>
            <footer className='public__footer'>
                <h3>God bless</h3>
            </footer>
        </section>
    </>
  )
  return content
}

export default Public