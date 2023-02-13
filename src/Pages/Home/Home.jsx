import React from 'react'
import axios from 'axios';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem'
import { useEffect, useState} from 'react';
import {BASE_URL, MY_KEY, TRENDING_MOVIES} from "Constants/Constants";
export default function Home() {
const [filmList, setFilmList] = useState([]);


  const loadFilm = async () => {
   try {
       const ulr = `${BASE_URL}${TRENDING_MOVIES}?${MY_KEY}`;
    
       const movies = await axios.get(ulr);
    
     setFilmList(movies.data.results)
    
   } catch (error) {
     console.log(error)
     }}

  useEffect(() => {
    
    loadFilm();
  }, [])
  
  return (
    <>
    <h1>Trending today</h1>
    <ul>
      <MoviesListItem filmList={filmList}></MoviesListItem>
    </ul>
    </>
  )
}
