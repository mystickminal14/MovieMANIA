import React, { useContext } from 'react';
import { AppContext } from '../context/context'; // Fix the import path
import './Home.css';
import { NavLink } from 'react-router-dom';

export default function Movies() {
  const { movies } = useContext(AppContext);

  return (
    <div className="cardd">
      {movies.map((val, k) => {
        const mname = val.Title.substring(0, 18); 
        
        return (
          <NavLink to={`movie/${val.imdbID}`} key={k}>
            <div className="card">
              <h1>{mname.length>=18 ? `${mname}...` : mname}</h1> {/* Use the shortened movie name */}
              <div className="img">
                <img src={val.Poster} alt='movie images' />
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}
