import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const prayersAdapter = createEntityAdapter({})

const initialState = prayersAdapter.getInitialState()

export const prayersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPrayers: builder.query({
            query: () => '/prayers',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedPrayers = responseData.map(prayer => {
                    prayer.id = prayer._id
                    return prayer
                });
                return prayersAdapter.setAll(initialState, loadedPrayers)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Prayer', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Prayer', id }))
                    ]
                } else return [{ type: 'Prayer', id: 'LIST' }]
            }
        })
    }),
})

export const {
    useGetPrayersQuery
} = prayersApiSlice

// returns the query result object
export const selectPrayersResult = prayersApiSlice.endpoints.getPrayers.select()

// creates memoized selector
const selectPrayersData = createSelector(
    selectPrayersResult,
    prayersResult => prayersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPrayers,
    selectById: selectPrayerById,
    selectIds: selectPrayerIds
    // Pass in a selector that returns the prayers slice of state
} = prayersAdapter.getSelectors(state => selectPrayersData(state) ?? initialState)