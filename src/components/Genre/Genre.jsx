import React, { useEffect, useState } from 'react';
import './Genre.css';
import { getGenre } from '../../redux/slices/genreSlice';
import { useDispatch, useSelector } from 'react-redux';

const Genres = ({ setSelectedGenre }) => {
  const dispatch = useDispatch();

  // genres varsayılan olarak boş dizi
  const { genres = [] } = useSelector((store) => store.genre);

  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);

  const [activeGenre, setActiveGenre] = useState(null);

  const handleGenre = (genre) => {
    setSelectedGenre(genre);
    setActiveGenre(genre.id);
  };

  const filteredGenres = genres.filter(
    (genre) => genre.id !== 10749 && genre.id !== 18
  );

  return (
    <div className="genres">
      <ul>
        {filteredGenres.map((genre, index) => (
          <li
            className={`genre ${genre.id === activeGenre ? 'active' : ''}`}
            onClick={() => handleGenre(genre)}
            key={genre.id + index}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;

