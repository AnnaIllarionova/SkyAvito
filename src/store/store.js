import { configureStore } from "@reduxjs/toolkit";
import { allAdvertisementsApi } from "../services/api-services";
import { token, userApi } from "../services/api-services-reauth";

export const store = configureStore({
  reducer: {
    [allAdvertisementsApi.reducerPath]: allAdvertisementsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [token.reducerPath]: token.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(allAdvertisementsApi.middleware)
    .concat(userApi.middleware)
    .concat(token.middleware),
});
