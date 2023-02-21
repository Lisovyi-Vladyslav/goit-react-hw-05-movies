import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./Pages/Home/Home"));
const Movies = lazy(() => import("./Pages/Movies/Movies"));
const MoviesDetails = lazy(() => import("./Pages/MoviesDetails/MoviesDetails"));
const Review = lazy(() => import("./Pages/MoviesDetails/Review/Review"));
const Cast = lazy(() => import("./Pages/MoviesDetails/Cast/Cast"));
const SharedLayout = lazy(() => import("./Pages/SharedLayout/SharedLayout"));



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
