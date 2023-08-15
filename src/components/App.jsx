import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
const Home = lazy(() => import('../pages/Home/Home'));
// import { Home } from './Home/Home';
const Movies = lazy(() => import('../pages/Movies/Movies'));
// import { Movies } from './Movies/Movies';
const MovieDetails = lazy(() => import('../pages/MovieDetais/MovieDetails'));
// import { MovieDetails } from './MovieDetais/MovieDetails';
const Cast = lazy(() => import('./Cast/Cast'));
// import { Cast } from './Cast/Cast';
const Reviews = lazy(() => import('./Reviews/Reviews'));
// import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
