import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './md.css'
export default function MovieDertails() {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    async function getMovie() {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`);
            const data = response.data;

            if (data.Response === 'True') {
                setLoading(false);
                setMovie(data); // Set the entire movie data here
            }
        } catch (error) {
            console.error('Error fetching movie:', error);
        }
    }

    useEffect(() => {
        getMovie();
    }, [id]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                  <div className="classs">
                  <div className="img2"><img src={movie.Poster} alt='movie img'/></div> 
                    <div className="clo">
                      <h1>{movie.Title}</h1>
                    <p>Year: {movie.Year}</p>
                    <p> {movie.Released}</p>
                    <p> {movie.Genre}</p>
                    <p> {movie.Director}</p>
                    <p> {movie.imdbRating}</p>
                     <p> {movie.Country}</p></div>
                  </div>
                   
                  
                </div>
            )}
        </div>
    );
}
