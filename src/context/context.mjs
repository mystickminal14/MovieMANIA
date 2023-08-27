import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const AppContext = createContext();

export default function ContextSharer({ children }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: '' });
    const [quer, setQuer] = useState('titanic'); 
    async function getMovies() {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${quer}`);
            const data = response.data;

            if (data.Response === 'True') {
                setLoading(false);
                setMovies(data.Search);
            } else {
                setError({
                    show: true,
                    msg: data.Error
                });
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

  

    useEffect(() => {
        let timer=setTimeout(()=>{
            getMovies();
        },800)
       return ()=>{
clearTimeout(timer)
       }
    }, [quer]);

    return (
        <AppContext.Provider value={{ movies, loading, error,quer, setQuer }}>
            {children}
        </AppContext.Provider>
    );
}
