import { configureStore } from "@reduxjs/toolkit";

import FavoriteReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: FavoriteReducer,
  },
});
