import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8090",
});

export const allAdvertisementsApi = createApi({
  reducerPath: "allAdvertisementsApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllAdvertisements: builder.query({
      query: () => "/ads",
    }),
    getAllImages: builder.query({
      query: () => "/images",
    }),
    getImageById: builder.query({
      query: ({ id }) => `/images/${id}`,
    }),
    getAdvertisementById: builder.query({
      query: ({ id }) => `/ads/${id}`,
    }),
  }),
});

export const {
  useGetAllAdvertisementsQuery,
  useGetAllImagesQuery,
  useGetImageByIdQuery,
  useGetAdvertisementByIdQuery,
} = allAdvertisementsApi;
