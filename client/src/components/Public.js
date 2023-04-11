import React from 'react'
import Header from './PublicHeader'

const Public = () => {
  const content = (
    <>
        <section className='public'>
            <Header />
            <main className='public__main'>
                <h2>Welcome!</h2>
            </main>
            <footer className='public__footer'>
                <h3>God bless</h3>
            </footer>
        </section>
    </>
  )
  return content
}

export default Public