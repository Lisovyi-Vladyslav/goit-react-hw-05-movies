import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MoviesListItem({filmList}) {
    const location = useLocation();
  return (
      <>
      {
          filmList.map(({ id, title }) => (
        <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
          <h2>{title}</h2>
        </Link>
              ))}  
      </>
  )
}
