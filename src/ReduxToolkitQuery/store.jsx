import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usesApi } from './redux/Redux'
export const store = configureStore({
    reducer: {
        [usesApi.reducerPath]: usesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usesApi.middleware),
})

setupListeners(store.dispatch)