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
  console.log(cast);
  return (
    <>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img src={actor.profile_path} alt={actor.id} />
            <span>{actor.name}</span>
            <span>Craracter: {actor.character}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
