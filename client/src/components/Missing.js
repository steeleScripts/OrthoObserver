import Header from './PublicHeader'
import PublicNav from './PublicNav'

const Missing = () => {
    return (
        <>
            <Header />
            <PublicNav />
            <h1 className='public__main'>Resource not found</h1>
        </>
    )
}

export default Missing