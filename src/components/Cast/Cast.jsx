import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/Api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      fetchCast(id)
        .then(({ cast }) => {
          setCast(cast);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchData();
  }, [id]);

  return (
    <>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path ? (
              <>
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.title}
                />
                <br />
              </>
            ) : null}
            <span>Name: {actor.name}</span>
            <br />
            <span>Character: {actor.character}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
