import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usesApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64e34f09bac46e480e789213.mockapi.io' }),
    endpoints: (builder) => ({
        getAllPokemons: builder.query({
            query: () => '/user',
        }),
        createUser: builder.mutation({
            query: (newPokemon) => ({
                url: '/user',
                method: 'POST',
                body: newPokemon,
            }),
        }),
        updateUser: builder.mutation({
            query: ({ id, updatedPokemon }) => ({
                url: `/user/${id}`,
                method: 'PUT',
                body: updatedPokemon,
            }),
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetAllPokemonsQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = usesApi;
