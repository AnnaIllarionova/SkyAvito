import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryReauth = fetchBaseQuery({
  baseUrl: "http://localhost:8090",
  prepareHeaders: (headers) => {
    const accessToken = localStorage
      .getItem("accessTokenData")
      .replace(/^"|"$/g, "");

    console.debug("Аксес", accessToken);

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8090",
});

export const apiWithAuthorization = createApi({
  reducerPath: "apiWithAuthorization",
  baseQuery: baseQueryReauth,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "/user",
      providesTags: ["Auth"],
    }),
  }),
});

export const { useGetCurrentUserQuery } = apiWithAuthorization;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    registerNewUser: builder.mutation({
      query: ({ password, role, email, name, surname, phone, city }) => ({
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

export const { useGetTokenMutation } = token;
