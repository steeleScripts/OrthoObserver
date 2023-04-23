import PublicHeader from './Public/PublicHeader'
import PublicNav from './Public/PublicNav'
import PublicMain from './Public/PublicMain'

const Missing = () => {

    const title = "Resource not found"
    return (
        <>
            <PublicHeader />
            <div className='public__main'><h1>Resource Not Found</h1></div>
        </>
    )
}

export default Missing