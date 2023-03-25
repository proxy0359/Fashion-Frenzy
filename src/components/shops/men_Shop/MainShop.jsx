import React from 'react';
import CardShop from '../../UI/card-shop/CardShop';
import { MEN_SHIRTS } from '../../../assets/Dummy_Data';

import './MainShop.css';

const MainShop = () => {
  return (
    <section>
      <div className="flex flex-col pt-8 pl-10 max-sm:mt-10 mb-8 ">
        <h1 className="block w-max mb-4 ">Men's</h1>
        <p className="w-[30rem] max-md:w-full max-md:pr-4">
          Our men's collection is home to all our latest products. From warm
          insulation to hardy knitwear, our clothing is designed for adventure,
          with sustainability as standard.
        </p>
      </div>
      <div className="flex flex-wrap  ">
        {MEN_SHIRTS.map((item) => (
          <div className="m-auto mb-8 ">
            <CardShop
              tagVersion={true}
              price={item.price}
              title={item.name}
              tags={item.tags}
              img={item.image1}
              img2={item.image2}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainShop;
