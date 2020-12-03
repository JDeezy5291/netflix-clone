import React, { useState, useEffect } from 'react'
import axios from './axios'
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    // state is like short term memory; when refresh it disappears
    const [movies, setMovies] = useState([])
    
    // when row loads, make a request to tmdb 
    useEffect(() => {
        // if [], run once when the row loads and doesn't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request.data.results)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    console.table(movies)

    return (
<<<<<<< HEAD
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}
=======
        <div>
            <div className="row">
                <h2>{title}</h2>
                <div className="row_posters">
                    {movies.map(movie => (
                        <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                    ))}
                </div>
>>>>>>> 2881193b372305b474883688347b16d718c7884d
            </div>
        </div>
    )
}

export default Row
