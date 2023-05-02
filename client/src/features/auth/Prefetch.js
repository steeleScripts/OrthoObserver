import { store } from '../../app/store'
import { prayersApiSlice } from '../prayers/prayersApiSlice'
import { usersApiSlice } from '../users/usersApiSlice'
import { quotesApiSlice } from '../quotes/quotesApiSlice'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        const prayers = store.dispatch(prayersApiSlice.endpoints.getPrayers.initiate())
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())
        const quotes = store.dispatch(quotesApiSlice.endpoints.getQuotes.initiate())

        return () => {
            console.log('unsubscribing')
            prayers.unsubscribe()
            users.unsubscribe()
            quotes.unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default Prefetch