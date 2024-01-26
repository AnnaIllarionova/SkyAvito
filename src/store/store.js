import { configureStore } from "@reduxjs/toolkit";
import { allAdvertisementsApi } from "../services/api-services";

export const store = configureStore({
  reducer: {
    [allAdvertisementsApi.reducerPath]: allAdvertisementsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(allAdvertisementsApi.middleware),
});
