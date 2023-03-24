import React from 'react';
import './HomeSection3.css';
import { NavLink } from 'react-router-dom';
import TwoItemsCarousel from '../../UI/carousel/TwoItemsCarousel';
import TwoItemsCard from '../../UI/card-shop/TwoItemsCard';
import item1 from '../../../assets/picturesForCarousel/item1.jpg';
import item2 from '../../../assets/picturesForCarousel/item2.jpg';
import SlickCarousel from '../../UI/SlickCarousel';
import CardShop from '../../UI/card-shop/CardShop';

const HomeSection3 = () => {
  return (
    <section>
      <div className="grid grid-cols-12 mx-10 overflow-hidden mb-28">
        <div className="col-span-9 max-md:col-span-11 max-lg:col-span-10 max-xl:col-span-9">
          <h2 className="text-responsive max-sm:!text-2xl">
            {/* THIS SHOULD BE A PROP  */}
            Since 2003 we have been committed to a deep belief: to make truly
            exceptional products in a more&nbsp;
            <NavLink to="/impact" className="link">
              {/* THIS SHOULD BE A PROP */}
              responsible and transparent
            </NavLink>
            &nbsp;way
          </h2>
        </div>
      </div>

      {/* Two items Carousel */}
      <TwoItemsCarousel>
        <TwoItemsCard img={item1} />
        <TwoItemsCard img={item2} />
      </TwoItemsCarousel>

      <SlickCarousel className="mt-28">
        <CardShop
          category="History"
          title="Who We Are"
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/history-tent-finisterre_360x.jpg?v=1667837063"
        />
        <CardShop
          category="Life at Frenzy Fashion"
          title="Our Community"
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/yulex-swim-wave-finisterre_360x.jpg?v=1667837063"
        />
        <CardShop
          category="Our Impact"
          title="B_CORP"
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/b-corp-finisterre_360x.webp?v=1673544170"
        />
        <CardShop
          category="Frenzy Fashion Foundation"
          title="Our Purpose "
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/seasuit-finisterre_360x.jpg?v=1667837063"
        />
        <CardShop
          category="Our Impact"
          title="B_CORP"
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/b-corp-finisterre_360x.webp?v=1673544170"
        />
      </SlickCarousel>
    </section>
  );
};

export default HomeSection3;
