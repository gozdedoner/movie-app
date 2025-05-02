import React, { useEffect } from 'react'
import './MovieList.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList, getMovieListByGenre } from '../../redux/slices/movieListSlice';
import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading';


const MovieList = ({ selectedGenre }) => {

    const dispatch = useDispatch();

    const { movieList, status, error } = useSelector((store) => store.movieList)

    useEffect(() => {
      if(!selectedGenre ){
        dispatch(getMovieList())
      }else{
        dispatch(getMovieListByGenre(selectedGenre.id))
      }

      }, [selectedGenre, dispatch])


  return (
    <div className='Movie-List'>
      <h1>{selectedGenre ? selectedGenre.name : 'Discover'}</h1>
      <ul>
        {
          status === 'fulfilled' ?
          movieList && movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          )) : status === 'pending' ?
          <Loading /> :
          <p>{error}</p>
           }
      </ul>


      
    </div>
  )
}

export default MovieList
