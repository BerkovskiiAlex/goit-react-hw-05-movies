import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchGetTrending } from 'service/Api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetchGetTrending()
        .then(({ results }) => {
          setTrendMovies(results);
        })
        .catch(error => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
