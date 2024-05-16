import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    // Define a query endpoint
    // getPosts: builder.query({
    //   query: () => 'posts',
    // }),
    // Define a mutation endpoint
    signIn: builder.mutation({
      query: (credentials) => ({
        url: 'auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    verifyToken: builder.mutation({
      query: (token) => ({
        url: 'auth/verifyToken',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }),
   
    }),
    

  }),
});
// export const loginUser = createAsyncThunk(
//     "login",
//     async ({ email, password }) => {
//       const response = await fetch("http://localhost:4000/auth/signin", {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const result = await response.json();
//       return result;
//     }
//   );

// Export the auto-generated hooks for these endpoints
export const { useSignInMutation, useVerifyTokenMutation} = myApi;
