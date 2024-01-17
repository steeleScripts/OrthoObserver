
import NewPrayerForm from './NewPrayerForm'
import useAuth from '../../hooks/useAuth'

const NewPrayer = () => {
    const { username } = useAuth()

    if (!username) return <p>Not Currently Available</p>

    const content = <NewPrayerForm users={username} />

    return content
}
export default NewPrayer