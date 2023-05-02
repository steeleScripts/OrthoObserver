import PublicHeader from './Public/PublicHeader'
import PublicNav from './Public/PublicNav'
import PublicMain from './Public/PublicMain'
import PublicFooter from './Public/PublicFooter'

const Missing = () => {

    const title = "Resource not found"
    return (
        <>
            <section className='public'>
                <PublicHeader />
                <div className='public__main'>
                    <h2 className='public__mainTitle'>Resource Not Found</h2>
                </div>
                <PublicFooter />
            </section>
            
        </>
    )
}

export default Missing