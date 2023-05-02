import { useGetPrayersQuery } from "./prayersApiSlice"
import PrayerCell from './PrayerCell'

const PrayersList = () => {

    const {
        data: prayer,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPrayersQuery("prayersList")

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = prayer

        const tableContent = ids?.length
            ? ids.map(prayerId => <PrayerCell key={prayerId} prayerId={prayerId} />)
            : null

        content = (
            <div>{tableContent}</div>
        )
    }

    return content
}
export default PrayersList