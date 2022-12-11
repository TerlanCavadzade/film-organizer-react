import { configureStore } from "@reduxjs/toolkit";
import collectionSlice from "./CollectionSlice";
import movieSlice from "./MovieSlice";

const store = configureStore({
  reducer: {
    movieSlice: movieSlice.reducer,
    collectionSlice: collectionSlice.reducer
  }
});

export default store;
