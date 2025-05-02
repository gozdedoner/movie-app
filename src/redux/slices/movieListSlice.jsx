import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import { API_MOVIE_LIST, API_KEY } from "../../constants/api";

const initialState = {
  movieList: [],
  status: 'idle',
  error: null
  
};

export const getMovieList = createAsyncThunk("getMovieList", async () => {
  const res = await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}`);
  return res.data.results;
});

export const getMovieListByGenre = createAsyncThunk("getMovieListByGenre", async (id) => {
  const res = await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}&with_genres=${id}`);
  return res.data.results;
});


export const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieList.pending, (state, action) => {
      state.status = action.meta.requestStatus
    })
    

    builder.addCase(getMovieList.fulfilled, (state, action) => {
      state.status = action.meta.requestStatus
      state.movieList = action.payload
    })
    builder.addCase(getMovieList.rejected, (state, action) => {
      state.status = action.meta.requestStatus
      state.error = action.error.message
    })

    builder.addCase(getMovieListByGenre.fulfilled, (state, action) => {
      state.movieList = action.payload;
  })



  },
});

export const {} = movieListSlice.actions;

export default movieListSlice.reducer;
