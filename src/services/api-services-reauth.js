import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQueryReauth = () => {
//     const baseQuery = fetchBaseQuery({
//         baseUrl: "http://localhost:8090"
//     })
// }
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8090",
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    registerNewUser: builder.mutation({
      query: ({ password, role, email, name, surname, phone, city}) => ({
        url: "/auth/register",
        method: "POST",
        body: {
          password,
          role,
          email,
          name,
          surname,
          phone,
          city,
         
        },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useRegisterNewUserMutation } = userApi;

export const token = createApi({
    reducerPath: "token",
    baseQuery,
    endpoints: (builder) => ({
      getToken: builder.mutation({
        query: ({ email, password }) => ({
          url: "/auth/login",
          method: "POST",
          body: {
            email,
            password,
          },
        }),
      }),
    }),
  });
  
  export const {
    useGetTokenMutation,
  } = token;