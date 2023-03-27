import React from 'react';

const ProductCard = ({ tags, img, title }) => {
  return (
    <div className="w-full ">
      <div className="flex flex-wrap ">
        {tags.map((tag) => (
          <span className="product-tag !mb-0" key={tag.title}>
            {tag.title}
          </span>
        ))}
      </div>
      <img src={img} alt={title || ''} className="h-full w-9/12" />
    </div>
  );
};

export default ProductCard;
