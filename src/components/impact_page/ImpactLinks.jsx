import React, { useRef } from 'react';
import ScrollToHash from '../../helper/ScrollToHash';
import { Link } from 'react-router-dom';

const ImpactLinks = ({ impact, sourceSustain, productDesign }) => {
  const scrollTo = (id) => {
    window.scrollTo({
      top: id.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <ul>
      <li>
        <button
          className="link text-[#384972] mb-4"
          onClick={() => scrollTo(impact)}
        >
          Business Impact
        </button>
      </li>
      <li>
        <button
          className=" link   text-[#384972] mb-4"
          onClick={() => scrollTo(sourceSustain)}
        >
          Sourcing & Sustainability
        </button>
      </li>
      <li>
        <button
          className=" link text-[#384972] mb-4"
          onClick={() => scrollTo(productDesign)}
        >
          Product & Design
        </button>
      </li>
    </ul>
  );
};

export default ImpactLinks;
