import React from 'react'
import axios from 'axios';
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BASE_URL, MY_KEY, MOVIE_DETAILS } from "Constants/Constants";
import {MoviesDetailsAbout }from "components/MoviesDetailsAbout/MoviesDetailsAbout"

export default function MoviesDetails() {
  const { filmId } = useParams();
const [filmDetails, setFilmDetails] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";



  useEffect(() => {
      const movieDetails = async () => {
   try {
       const ulr = `${BASE_URL}${MOVIE_DETAILS}${filmId}?${MY_KEY}&language=en-US`;
       const movies = await axios.get(ulr);
     setFilmDetails(movies.data)
   } catch (error) {
     console.log(error)
      }
    }
    
    movieDetails();
  }, [filmId])
  
  return (
    <>
      <Link to={backLinkHref}>Back to products</Link>
      <MoviesDetailsAbout filmDetails={filmDetails}></MoviesDetailsAbout>
      <div>
        <h2>Addidional information</h2>
        <ul>
          <Link to={`cast`}>Cast</Link>
          <br />
          <Link to={`review`}>Reviews</Link>
        </ul>
      </div>
      <Outlet />
    </>
    
  );
};

