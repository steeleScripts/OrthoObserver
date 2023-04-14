import { useGetSaintsQuery } from "./saintsApiSlice"
import Saint from './Saint'

const SaintsList = () => {

    const {
        data: saints,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSaintsQuery()
    
    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error.data.message}</p>
    }

    if (isSuccess) {

        const { ids } = saints

        content = ids.map(saint => <Saint key={saint} saintId={saint} />)        
        
    }

    return (
        <section className="saints-list">
          <h2>Saints</h2>
          {content}
        </section>
      )
}
export default SaintsList