import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'

function Row({ title, fetchUrl }) {
    // state is like short term memory; when refresh it disappears
    const [movies, setMovies] = useState([])
    
    // when row loads, make a request to tmdb 
    useEffect(() => {
        // if [], run once when the row loads and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request.data.results)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)

    return (
        <div>
            <h2>{title}</h2>

            
        </div>
    )
}

export default Row
