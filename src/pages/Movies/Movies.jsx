import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/Api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const [queryStr, setQueryStr] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams(queryStr ? { query: queryStr } : {});
  };

  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetchSearchMovies(query)
        .then(({ results }) => {
          setSearchMovies(results);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchData();
  }, [query]);

  const location = useLocation();

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={queryStr}
          onChange={e => setQueryStr(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {
        <ul>
          {searchMovies.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Movies;
