import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MyList.css'

function MyList() {
const  { favoriteMovies } = useSelector(store => store.favorites)

  return (
    <div className='my-list'>
      <ul>
        {
          favoriteMovies?.map((movie => 
            <MovieCard key={movie.id} movie={movie} />
          )) 
        }
      </ul>

    </div>
  )
}

export default MyList