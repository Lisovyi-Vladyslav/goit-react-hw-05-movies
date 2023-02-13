import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import {Searchbar} from 'components/Searchbar/Searchbar'
import { SearchForm } from 'components/SearchForm/SearchForm'
import MoviesListItem from 'components/MoviesListItem/MoviesListItem'
import {BASE_URL, MY_KEY} from "Constants/Constants";

export default function Movies() {

  const [search, setSearch] = useState('');
  const [filmList, setFilmList] = useState([]);
  const [, setSearchParams] = useSearchParams();

  const handlSearcPhoto = (search) => {
     setSearch(search.search);
   };

  useEffect(() => {
    if (!search) {
      return;
    }

      const loadFilm = async () => {
        try {
     
       const ulr = `${BASE_URL}/search/movie?${MY_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;
    
       const movies = await axios.get(ulr);
    
     setFilmList(movies.data.results)
    
   } catch (error) {
     console.log(error)
      }
    }
    
    loadFilm();

    const nextParams = search !== "" ? { query: search } : {};
    setSearchParams(nextParams);
  }, [search, setSearchParams])
  
  return (
    <>     
<Searchbar>
    <SearchForm handlSearcPphoto={handlSearcPhoto} />
      </Searchbar>
      <ul>
      <MoviesListItem filmList={filmList}></MoviesListItem>  
      </ul>
      </>
  )
}
