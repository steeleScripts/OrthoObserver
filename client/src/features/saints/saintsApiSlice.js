import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const saintsAdapter = createEntityAdapter({})

const initialState = saintsAdapter.getInitialState()

export const saintsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSaints: builder.query({
            query: () => '/saints',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedSaints = responseData.map(saint => {
                    saint.id = saint._id
                    return saint
                });
                return saintsAdapter.setAll(initialState, loadedSaints)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Saint', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Saint', id }))
                    ]
                } else return [{ type: 'Saint', id: 'LIST' }]
            }
        })
    }),
})

export const {
    useGetSaintsQuery,
    useFindSaintQuery
} = saintsApiSlice

// returns the query result object
export const selectSaintsResult = saintsApiSlice.endpoints.getSaints.select()

// creates memoized selector
const selectSaintsData = createSelector(
    selectSaintsResult,
    saintsResult => saintsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllSaints,
    selectById: selectSaintById,
    selectIds: selectSaintIds
    // Pass in a selector that returns the saints slice of state
} = saintsAdapter.getSelectors(state => selectSaintsData(state) ?? initialState)