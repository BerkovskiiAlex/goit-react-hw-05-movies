import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/Api';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams(query ? { query } : {});
    setSubmitted(true);
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

    if (submitted) {
      fetchData();
    }
  }, [query, submitted]);

  console.log(searchMovies);

  const location = useLocation();

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setSearchParams({ query: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
      {submitted && (
        <ul>
          {searchMovies.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
