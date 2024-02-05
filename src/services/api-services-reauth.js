import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
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

  const forceLogOut = () => {
    localStorage.removeItem("newUser");
    localStorage.removeItem("accessTokenData");
    localStorage.removeItem("refreshTokenData");
    window.location.href = "/singin";
  };

  const result = await baseQuery(args, api, extraOptions);
  console.debug("Результат первого запроса", result);

  if (result?.error?.status !== 401) {
    return result;
  }

  const accessToken = localStorage
    .getItem("accessTokenData")
    .replace(/^"|"$/g, "");
  console.debug("Аксесс_2", accessToken);

  const refreshToken = localStorage
    .getItem("refreshTokenData")
    .replace(/^"|"$/g, "");

  console.debug("Рефреш", refreshToken);

  if (!refreshToken) {
    return forceLogOut();
  }

  const refreshResult = await baseQuery(
    {
      url: "/auth/login",
      method: "PUT",
      body: {
        access_token: accessToken,
        refresh_token: refreshToken,
      },
    },
    api,
    extraOptions,
  );
  console.debug(
    "Результат запроса на обновление токена не объект",
    refreshResult,
  );

  if (!refreshResult.data.access_token) {
    return forceLogOut();
    // console.log(refreshResult.data.access_token);
  }

  localStorage.setItem(
    "accessTokenData",
    JSON.stringify(refreshResult.data.access_token),
  );
  localStorage.setItem(
    "refreshTokenData",
    JSON.stringify(refreshResult.data.refresh_token),
  );

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogOut();
    // console.log(retryResult);
  }
  console.debug("Повторный запрос завершился успешно");

  return retryResult;
};

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
    changeCurrentUser: builder.mutation({
      query: ({ role, email, name, surname, phone, city }) => ({
        url: "/user",
        method: "PATCH",
        body: {
          role,
          email,
          name,
          surname,
          phone,
          city,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    changePassword: builder.mutation({
      query: ({ password_1, password_2 }) => ({
        url: "/user/password",
        method: "PUT",
        body: {
          password_1,
          password_2,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    addReview: builder.mutation({
      query: ({ id, text }) => ({
        url: `/ads/${id}/comments`,
        method: "POST",
        body: {
          text,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    addUserAvatar: builder.mutation({
      query: (file) => ({
        url: "/user/avatar",
        method: "POST",
        body: file,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useChangeCurrentUserMutation,
  useChangePasswordMutation,
  useAddReviewMutation,
  useAddUserAvatarMutation,
} = apiWithAuthorization;

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
