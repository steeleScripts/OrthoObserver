import { useGetOrthodoxPrayersQuery } from "./prayersApiSlice"
import OrthoPrayerCell from './OrthoPrayerCell'

const OrthodoxPrayers = () => {

    const {
        data: prayer,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetOrthodoxPrayersQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = prayer

        const tableContent = ids?.length
            ? ids.map(prayerId => <OrthoPrayerCell key={prayerId} prayerId={prayerId} />)
            : null

        content = (            
            <div>{tableContent}</div>
        )
    }

    return content
}
export default OrthodoxPrayers