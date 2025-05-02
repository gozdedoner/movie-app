import { configureStore } from '@reduxjs/toolkit'
import genreSlice from './slices/genreSlice'
import  movieListSlice  from './slices/movieListSlice'
import movieDetailSlice from './slices/movieDetailSlice'
import  favoriteSlice  from './slices/favoriteSlice'


export const store = configureStore({
  reducer: {
    genre: genreSlice,
    movieList: movieListSlice,
    movieDetail: movieDetailSlice,
    favorites: favoriteSlice
  },
})





