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
        }),
        getRecent5Prayers: builder.query({
            query: () => '/prayers/recent-5',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Prayer', id: 'RECENT5' },
                        ...result.ids.map(id => ({ type: 'Prayer', id }))
                    ]
                } else return [{ type: 'Prayer', id: 'RECENT5' }]
            }
        }),
        addNewPrayer: builder.mutation({
            query: initialPrayerData => ({
                url: '/prayers',
                method: 'POST',
                body: {
                    ...initialPrayerData,
                }
            }),
            invalidatesTags: [
                { type: 'Prayer', id: "LIST" }
            ]
        }),
        updatePrayer: builder.mutation({
            query: initialPrayerData => ({
                url: '/prayers',
                method: 'PATCH',
                body: {
                    ...initialPrayerData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Prayer', id: arg.id }
            ]
        }),
        deletePrayer: builder.mutation({
            query: ({ id }) => ({
                url: `/prayers`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Prayer', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetPrayersQuery,
    useGetRecent5PrayersQuery,
    useAddNewPrayerMutation,
    useUpdatePrayerMutation,
    useDeletePrayerMutation
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