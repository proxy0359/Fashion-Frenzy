import Star from './Star';
import React, { useState } from 'react';
import ShowRatingModal from './ShowRatingModal';

const Rating = ({ showRating }) => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const showRatingHandler = () => {
    showRating(true);
  };

  return (
    <>
      <div
        className="flex max-sm:flex-col cursor-pointer w-fit"
        onClick={showRatingHandler}
      >
        <ul className="flex w-max mr-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <li
              className="w-full"
              key={i}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(0)}
            >
              <Star yellow={i <= hoverIndex} />
            </li>
          ))}
        </ul>
        <p className=""> 94 Reviews</p>
      </div>
    </>
  );
};

export default Rating;
