import React from 'react';
import CardShop from '../../UI/card-shop/CardShop';
import TwoItemsCarousel from '../../UI/carousel/TwoItemsCarousel';
import TwoItemsCard from '../../UI/card-shop/TwoItemsCard';
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
          <div className="m-auto mb-8  " key={item.id}>
            <CardShop
              key={item.id}
              tagVersion={true}
              price={item.price.toLocaleString('en-US')}
              title={item.name}
              tags={item.tags}
              img={item.image1}
              img2={item.image2}
              to={`/men/${item.id}`}
            />
          </div>
        ))}
      </div>
      <TwoItemsCarousel>
        <TwoItemsCard
          img={
            'https://cdn.shopify.com/s/files/1/1074/5128/files/Artist_Tee_LB_Update_Page_Carousel_992x.jpg?v=1659538414'
          }
          title="Like-Minded Partnerships"
          description="Over the years we have partnered with brands who share our vision. Combining our expertise to produce products we believe in, that enable a connection to the sea."
          buttonTitle="Discover More"
        />
        <TwoItemsCard
          img={
            'https://cdn.shopify.com/s/files/1/1074/5128/files/W18_Microadventure_Web_summer_Carousel_992x.jpg?v=1651586588'
          }
          title="Lucas Beaufort"
          description="Explore uplifting summer gear in our latest artist collection."
          buttonTitle="Discover More"
        />
      </TwoItemsCarousel>
    </section>
  );
};

export default MainShop;
