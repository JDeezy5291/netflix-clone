import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import axios from './axios'
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    // state is like short term memory; when refresh it disappears
    const [movies, setMovies] = useState([])
    // get youtube url
    const [trailerUrl, setTrailerUrl] = useState("")
    
    // when row loads, make a request to tmdb 
    useEffect(() => {
        // if [], run once when the row loads and doesn't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }

      const handleClick = (movie) => {
          if(trailerUrl) {
            setTrailerUrl('')
          } else {
              movieTrailer(movie?.name || "")
              .then((url) => {
                //get everything from the '?' to the end 
                //https://www.youtube.com/watch?v=lJlEQim-yMo
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
              })
              .catch((error) => console.log(error))
          }
      }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
