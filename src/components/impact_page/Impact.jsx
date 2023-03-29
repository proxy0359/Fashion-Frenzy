import React from 'react';

import ImpactImage from './ImpactImage';
import SlickCarousel from '../UI/SlickCarousel';
import ImpactLinks from './ImpactLinks';
import ImpactCard from './impact-Card/ImpactCard';

const Impact = () => {
  return (
    <section id="impact" className="mx-auto">
      <h1 className="ml-10 mt-4 font-semibold">Impact</h1>
      <div className="grid grid-cols-12 ml-10 mt-16">
        <div className="col-span-7 max-md:col-span-12 max-md:m-auto">
          <h3 className="h3 w-8/12 max-md:m-auto max-md:w-full max-md:mb-4">
            Since 2003, sustainability has been integral to everything we do.
          </h3>
        </div>
        <div className="col-span-5 max-md:col-span-12 ">
          <ImpactLinks />
        </div>
      </div>
      <div className="mt-20">
        <ImpactImage
          img={
            'https://cdn.shopify.com/s/files/1/1074/5128/files/Nieuwland_Campaign_Page_surf_desktop_1500x.jpg?v=1642055611'
          }
        />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-5 max-md:col-span-10">
          <h3 className="h3 ml-10 mt-20">
            The ocean's future is our future. That's why we're here - to inspire
            a love of the sea and protect it together. Our mission to have a
            positive impact on the world around us is woven into every fabric of
            what we do.
          </h3>
        </div>
      </div>
      <div className="flex  flex-wrap justify-start items-center m-20 ml-10 max-md:justify-center">
        <ImpactCard
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/sustainability-history-featured_480x.jpg?v=1642055735"
          title="Our Story"
          category="It all starts with the sea"
          description="Born over a decade ago from the needs of hardy British surfers, Finisterre designs functional and sustainable product for those that share a love of the sea."
        />
        <ImpactCard
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/sustainability-b-corp-featured_480x.jpg?v=1642055735"
          title="B Corp"
          category="B Corp certified since 2018"
          description="Using business as a force for good. In 2021 we proudly recertified as a B Corp™"
        />
        <ImpactCard
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/Foundation_480x.jpg?v=1642055443"
          title="Finisterre Foundation"
          category="Championing Equal Access"
          description="Our Finisterre Foundation hopes to make a real difference in championing equal access to the ocean for everyone."
        />
      </div>
    </section>
  );
};

export default Impact;
