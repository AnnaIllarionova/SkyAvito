import { configureStore } from "@reduxjs/toolkit";
import { allAdvertisementsApi } from "../services/api-services";
import {
  apiWithAuthorization,
  token,
  userApi,
} from "../services/api-services-reauth";

export const store = configureStore({
  reducer: {
    [allAdvertisementsApi.reducerPath]: allAdvertisementsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [token.reducerPath]: token.reducer,
    [apiWithAuthorization.reducerPath]: apiWithAuthorization.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(allAdvertisementsApi.middleware)
      .concat(userApi.middleware)
      .concat(token.middleware)
      .concat(apiWithAuthorization.middleware),
});
