import { createSlice } from "@reduxjs/toolkit";

const initialState = { movieList: [], movieName: "" };

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    changeMovieName(state, action) {
      state.movieName = action.payload;
    },
    addToStore(state, action) {
      if (
        state.movieList.some((element) => element.name === action.payload.name)
      ) {
        return;
      }
      state.movieList.push(action.payload);
    },
    removeMovie(state, action) {
      console.log(action.payload);
      state.movieList = state.movieList.filter(
        (element) => element.id !== action.payload
      );
    },
    clearList(state) {
      state.movieList = [];
    }
  }
});

export const {
  clearList,
  changeMovieName,
  addToStore,
  removeMovie
} = movieSlice.actions;

export default movieSlice;
