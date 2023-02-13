import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import MoviesDetails from "./Pages/MoviesDetails/MoviesDetails";
import Review from "./Pages/MoviesDetails/Review/Review";
import Cast from "./Pages/MoviesDetails/Cast/Cast";
import SharedLayout from "./Pages/SharedLayout/SharedLayout"


export const App = () => {

  return (
    <>
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
         <Route path="/movies/:filmId" element={<MoviesDetails />}>
           <Route path="review" element={<Review />} />
           <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    </>
  );
};
