import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/Api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      fetchReviews(id)
        .then(({ results }) => {
          setReviews(results);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchData();
  }, [id]);
  console.log(reviews);
  return (
    <>
      {reviews.length ? (
        reviews.map(review => (
          <ul key={review.id}>
            <li> {review.author}</li>
            <span>{review.content}</span>
          </ul>
        ))
      ) : (
        <span>No reviews.</span>
      )}
    </>
  );
};
