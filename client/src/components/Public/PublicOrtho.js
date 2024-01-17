import OrthodoxPrayers from "../../features/prayers/OrthodoxPrayers"

const PublicOrtho = () => {

    //Add Clergy Prayer Features

    return (
        <>
            <section className='public'>
                <main className='public__main'>
                        <h2 className='public__mainTitle'>Orthodox Prayers</h2>
                        <div className='public__mainContent' >
                            <OrthodoxPrayers/>                          
                        </div>
                </main>
            </section>
        </>
  )
}

export default PublicOrtho