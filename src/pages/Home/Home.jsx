import React, { useState } from 'react'
import './Home.css'
import Genre from '../../components/Genre/Genre'
import MovieList from '../../components/MovieList/MovieList'

function Home() {
  const [selectedGenre, setSelectedGenre] = useState(null)
  return (
    <div className='Home'>
      <Genre setSelectedGenre={setSelectedGenre} />
      <MovieList selectedGenre={selectedGenre} />
      </div>
  )
}

export default Home