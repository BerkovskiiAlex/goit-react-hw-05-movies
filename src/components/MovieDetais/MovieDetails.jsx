import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchDetails } from 'service/Api';

export const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const { genres = [] } = movieDetail;
  const goBack = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchData = () => {
      fetchDetails(id)
        .then(data => {
          setMovieDetail(data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchData();
  }, [id]);
  console.log(movieDetail);
  return (
    <>
      <Link to={goBack.current}>Go back</Link>
      <div>
        {movieDetail.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
        )}
        <div>
          <ul>
            <li>
              <h1>{movieDetail.title}</h1>
            </li>
            <li>
              <span>{`Vote Average = ${movieDetail.vote_average}`}</span>
            </li>
            <li>
              <h2>Overview</h2>
            </li>
            <li>
              <span>{movieDetail.overview}</span>
            </li>
            <li>
              <h2>Genres</h2>
            </li>
          </ul>
          <ul>
            {genres &&
              genres.map((genre, index) => <li key={index}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <hr />
      <h2>Aditional Information</h2>
      <ul>
        <li>
          <NavLink to="Cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="Reviews">Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};
