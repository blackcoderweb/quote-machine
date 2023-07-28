// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const quoteApi = createApi({
    reducerPath: "quoteApi",
    baseQuery: fetchBaseQuery({baseUrl : "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9"}),
    endpoints: (builder) => ({
        //HTTP request GET
        getQuotes: builder.query({
            query: () => "/raw"
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuotesQuery } = quoteApi;