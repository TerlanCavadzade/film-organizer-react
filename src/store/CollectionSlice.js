import { createSlice } from "@reduxjs/toolkit";

const initialState = { movieCollection: [] };

const collectionSlice = createSlice({
  name: "movieCollection",
  initialState,
  reducers: {
    addToCollection(state, action) {
      state.movieCollection.push(action.payload);
    }
  }
});

export const { addToCollection } = collectionSlice.actions;

export default collectionSlice;
