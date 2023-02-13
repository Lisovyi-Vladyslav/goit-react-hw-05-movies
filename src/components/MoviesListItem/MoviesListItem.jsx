import React from 'react'
import PropTypes from "prop-types";

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

MoviesListItem.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  })),
  
};
