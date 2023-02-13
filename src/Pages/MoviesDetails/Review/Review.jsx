import React from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BASE_URL, MY_KEY, MOVIE_DETAILS } from "Constants/Constants";


export default function Review() {

const { filmId } = useParams();
const [filmReview, setFilmReview] = useState([]);

  useEffect(() => {
        if (!filmId) {
      return
    }

      const movieDetails = async () => {
   try {
       const ulr = `${BASE_URL}${MOVIE_DETAILS}${filmId}/reviews?${MY_KEY}&language=en-US`;
       const movies = await axios.get(ulr);
     
     setFilmReview(movies.data.results)
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
          filmReview.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
      <p>{content}</p>
            </li>
              ))}  
      </ul>
    </div>
  )
}
