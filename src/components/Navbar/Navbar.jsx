import React from 'react'
import { RiMovie2AiFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar() {
const favoriteCounter = useSelector(store => store.favorites.favoriteMovies.length)

  return (
    <nav className='navbar'>
        <div className='left'>
          <Link to="/">
        <h1>MovieApp</h1>
        </Link>
        </div>
        <div className='center'>
        <RiMovie2AiFill />

        </div>
        <div className='right'>
            <ul>
                <li>
                  <Link to="/">
                  <FaHome />
                  </Link>
                  </li>

                <li>
                  <Link to="/my-list">
                  <FaHeart />
                  <div className='favorite-count'>
                    {favoriteCounter}
                  </div>
                  </Link>
                  </li>
            </ul>

        </div>

   </nav>
  )
}

export default Navbar