import React, { useEffect, useState } from 'react';
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
      <Link to={location.state?.from || '/'}>Go back</Link>
      <div>
        <img src="movieDetail.poster_path" alt="nema" />
        <br />
        <span>{movieDetail.original_title}</span>
        <br />
        <span>{movieDetail.vote_average}</span>
        <br />
        <span>Overview</span>
        <br />
        <span>{movieDetail.overview}</span>
        <br />
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
