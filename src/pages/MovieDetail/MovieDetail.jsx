import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { store } from "../../redux/store";
import { getMovieDetailById } from "../../redux/slices/movieDetailSlice";
import { API_IMG } from "../../constants/api";
import { FaStar } from "react-icons/fa6";
import './MovieDetail.css'
import { addFavorite, removeFavorite } from "../../redux/slices/favoriteSlice";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.movieDetail);
  const {
    title,
    overview,
    vote_average,
    backdrop_path,
    genres,
    original_language,
    poster_path,
    release_date,
  } = movieDetail;
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetailById(id));
  }, [id, dispatch]);

  const release_year = new Date( release_date)
  const languageMap = {
    en: "English",
    fr: "French",
    de: "German",
    es: "Spanish",
    it: "Italian",
    tr: "Turkish",
    ru: "Russian",
    zh: "Chinese",
    ja: "Japanese",
    
  };

  const isFavorite = useSelector(store => store.favorites.favoriteMovies?.some(movie => movie.id === id))


  const handleAddFavorite = () => {
    const payload = {
      id,
      title,
      poster_path,
      vote_average
    }
    dispatch(addFavorite(payload))

  }

  const handleRemoveFavorite = () => {
    const payload = {
      id
    }
    dispatch(removeFavorite(payload))

  }
  
  

  return (
    <div className="movie-detail">
      <img className="backdrop" src={`${API_IMG}/${backdrop_path}`} alt={title} />
      <header>
        <p>{title}</p>
        <div className="add-favorite-remove">
          <button className={isFavorite ? 'remove-btn' : 'add-btn'} onClick={isFavorite ? handleRemoveFavorite : handleAddFavorite}>
            {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          </button>
          
        </div>
      </header>
      <div className="content">
        <div className="left">
          <div className="movie-poster_path">
            <img src={`${API_IMG}/${poster_path}`} alt={title} />
          </div>
        </div>
        <div className="right">
          <div className="movie-overview">
            <p>{overview}</p>
          </div>
          <div className="movie-rating">
            <FaStar />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <div className="release-date">
            <span>Year:</span>
            <p>{release_year.getFullYear()}</p>
          </div>
          <div className="movie-info">
            <div className="movie-genres">
              <span>Genres:</span>
              <ul>
                {genres?.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
            <div className="movie-languages">
              <span>Languages:</span>
              <ul>
                {[original_language]?.map((language, i) => (
                  <li key={i}>{languageMap[original_language] || original_language}</li>
  
                  
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
