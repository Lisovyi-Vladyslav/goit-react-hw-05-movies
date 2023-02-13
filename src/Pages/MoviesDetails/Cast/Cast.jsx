import React from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BASE_URL, MY_KEY, MOVIE_DETAILS } from "Constants/Constants";

export default function Cast() {

 const { filmId } = useParams();
const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    if (!filmId) {
      return
    }
      const movieDetails = async () => {
   try {
       const ulr = `${BASE_URL}${MOVIE_DETAILS}${filmId}/credits?${MY_KEY}&language=en-US`;
       const movies = await axios.get(ulr);
    console.log(movies.data.cast)
     setFilmCast(movies.data.cast)
   } catch (error) {
     console.log(error)
      }
    }
    
    movieDetails();
  }, [filmId])

  return (
    <div>
  
      <ul>
        {
          filmCast.map(({ profile_path, original_name, cast_id }) => (
            <li key={cast_id}>
      {profile_path && <img
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={`${original_name}`}
                height='100'
                onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-";
           
  }}
      />}
      <p>{original_name}</p>
            </li>
              ))}  
      </ul>
    </div>
  )
}
