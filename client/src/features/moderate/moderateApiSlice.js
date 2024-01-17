import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const moderateAdapter = createEntityAdapter({})

const initialState = moderateAdapter.getInitialState()

export const moderateApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTotals: builder.query({
            query: () => '/moderate/totals',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Moderate', id: 'TOTALS' },
                        ...result.ids.map(id => ({ type: 'Moderate', id }))
                    ]
                } else return [{ type: 'Moderate', id: 'TOTALS' }]
            }
        }),
        getFlaggedPrayers: builder.query({
            query: () => '/moderate/prayers',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Moderate', id: 'PRAYERS' },
                        ...result.ids.map(id => ({ type: 'Moderate', id }))
                    ]
                } else return [{ type: 'Moderate', id: 'PRAYERS' }]
            }
        }),
        getFlaggedUsers: builder.query({
            query: () => '/moderate/users',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Moderate', id: 'USERS' },
                        ...result.ids.map(id => ({ type: 'Moderate', id }))
                    ]
                } else return [{ type: 'Moderate', id: 'USERS' }]
            }
        }),        
        flagPrayer: builder.mutation({
            query: initialFlagData => ({
                url: '/moderate/flag',
                method: 'POST',
                body: {
                    ...initialFlagData,
                }
            }),
            invalidatesTags: [
                { type: 'Moderate', id: "TOTALS" }
            ]
        }),
        unflagPrayer: builder.mutation({
            query: initialFlagData => ({
                url: '/moderate/unflag',
                method: 'POST',
                body: {
                    ...initialFlagData,
                }
            }),
            invalidatesTags: [
                { type: 'Moderate', id: "TOTALS" }
            ]
        }),
        flagUser: builder.mutation({
            query: initialFlagData => ({
                url: '/moderate/unflag',
                method: 'POST',
                body: {
                    ...initialFlagData,
                }
            }),
            invalidatesTags: [
                { type: 'Moderate', id: "TOTALS" }
            ]
        }),
        unflagUser: builder.mutation({
            query: initialFlagData => ({
                url: '/moderate/unflag',
                method: 'POST',
                body: {
                    ...initialFlagData,
                }
            }),
            invalidatesTags: [
                { type: 'Moderate', id: "TOTALS" }
            ]
        }),
        getActivityLog: builder.query({
            query: initialPrayerData => ({
                url: '/moderate/log',
                method: 'GET'
            }),
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Moderate', id: 'LOG' },
                        ...result.ids.map(id => ({ type: 'Moderate', id }))
                    ]
                } else return [{ type: 'Moderate', id: 'LOG' }]
            }
        })
    }),
})

export const {
    useGetTotalsQuery,
    useGetActivityLogQuery,
    useGetFlaggedPrayersQuery,
    useGetFlaggedUsersQuery,
    useFlagPrayerMutation,
    useFlagUserMutation    
} = moderateApiSlice

// returns the query result object
export const selectModerateResult = moderateApiSlice.endpoints.getActivityLog.select()

// creates memoized selector
const selectModerateData = createSelector(
    selectModerateResult,
    moderateResult => moderateResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllLogs,
    selectById: selectLogById,
    selectIds: selectLogIds
    // Pass in a selector that returns the moderate slice of state
} = moderateAdapter.getSelectors(state => selectModerateData(state) ?? initialState)