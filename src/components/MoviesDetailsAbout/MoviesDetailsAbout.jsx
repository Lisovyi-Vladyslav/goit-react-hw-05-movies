import React from 'react'

export default function MoviesDetailsAbout(filmDetails) {
  
  const {original_title, vote_average, vote_count, popularity, genresEl, overview,poster_path} = filmDetails.filmDetails
    return (
      <>
        <div >
          {poster_path && <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`Cover of the film ${original_title}`}
          onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-";
           
  }}
          />}
        
        <div>
          <p >{original_title}</p>
          <div >
            <ul >
              <li >
                <p>Vote / Votes</p>
              </li>
              <li >
                <p>Popularity</p>
              </li>
              <li >
                <p>Original Title</p>
              </li>
              <li >
                <p>Genre</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  <span >{vote_average}</span
                  >/<span 
                  >{vote_count}</span
                  >
                </p>
              </li>
              <li>
                <p>{popularity}</p>
              </li>
              <li>
                <p>{original_title}</p>
              </li>
              <li>
                <p>{genresEl}</p>
              </li>
            </ul>
          </div>
          <p>About</p>
          <p>{overview}</p>
          
        </div>
      </div>
      <div>
        
      </div>
      </>
  )
}
