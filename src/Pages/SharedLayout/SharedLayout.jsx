import React from 'react'
import { Outlet, Link  } from "react-router-dom";


export default function SharedLayout() {
  return (
      <>
       <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/movies">Movies</Link>
          </nav> 
          <Outlet />
      </>

  )
}
