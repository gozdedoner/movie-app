import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import axios from "axios";

import { API_GENRE, API_KEY } from "../../constants/api";

const initialState = {
  genres: [],
};

export const getGenre = createAsyncThunk('getGenres', async () => {
    const res = await axios.get(`${API_GENRE}?api_key=${API_KEY}`)
    return res.data.genres;
   
})

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenre.fulfilled, (state, action) => {
        state.genres = action.payload
    });
  },
});

export const {} = genreSlice.actions;

export default genreSlice.reducer;
