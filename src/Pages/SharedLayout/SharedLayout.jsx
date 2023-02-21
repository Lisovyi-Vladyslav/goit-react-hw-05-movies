import React from 'react'
import { Outlet, Link  } from "react-router-dom";
import { Suspense } from "react";

export default function SharedLayout() {
  return (
      <>
       <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/movies">Movies</Link>
          </nav> 
           <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </>

  )
}
