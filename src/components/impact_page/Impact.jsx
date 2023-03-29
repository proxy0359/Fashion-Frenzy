import React, { useRef } from 'react';

import ImpactImage from './ImpactImage';
import ScrollToHash from '../../helper/ScrollToHash';
import ImpactLinks from './ImpactLinks';
import ImpactCard from './impact-Card/ImpactCard';

const Impact = () => {
  const impactRef = useRef(null);
  const sourceSustainRef = useRef(null);
  const productDesignRef = useRef(null);
  return (
    <section className="mx-auto">
      <ScrollToHash />
      <h1 className="ml-10 mt-4 font-semibold">Impact</h1>
      <div className="grid grid-cols-12 ml-10 mt-16">
        <div className="col-span-7 max-md:col-span-12 max-md:m-auto">
          <h3 className="h3 w-8/12 max-md:m-auto max-md:w-full max-md:mb-4">
            Since 2003, sustainability has been integral to everything we do.
          </h3>
        </div>
        <div className="col-span-5 max-md:col-span-12 ">
          <ImpactLinks
            impact={impactRef}
            sourceSustain={sourceSustainRef}
            productDesign={productDesignRef}
          />
        </div>
      </div>
      <div id="impact" className="mt-20" ref={impactRef}>
        <ImpactImage
          img={
            'https://cdn.shopify.com/s/files/1/1074/5128/files/Nieuwland_Campaign_Page_surf_desktop_1500x.jpg?v=1642055611'
          }
          title="Business Impact"
          alt="Business Impact image"
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

      {/* IMPACT CARDS */}
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

      {/* ANOTHER IMPACT IMAGE */}
      <div
        id="sourcingAndSustainability"
        className="mt-20 "
        ref={sourceSustainRef}
      >
        <ImpactImage
          img={
            'https://cdn.shopify.com/s/files/1/1074/5128/files/group-surfing-finisterre-impact-hero_1500x.jpg?v=1647009218'
          }
          title="Sourcing & Sustainability"
          alt="Sourcing & Sustainability image"
        />
      </div>

      {/* IMPACT CARD ABOUT MANUFACTURERS */}
      <div className="flex  flex-wrap justify-start items-center m-20 ml-10 max-md:justify-center">
        <ImpactCard
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/leave-no-trace-flatlay-image-recycled-packaging-mobile_318b577b-c072-4c53-85a9-0c49b1bfe52c_480x.jpg?v=1647009389"
          title="Packaging"
          category="Leave No Trace"
          description="We believe that single use is no use and in 2018 we made a commitment to eradicate single use, non-degradable plastic at Finisterre."
        />
        <ImpactCard
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/factories-of-finisterre-hero_480x.jpg?v=1647009469"
          title="Sustainability"
          category="Factories of Finisterre"
          description="Every Finisterre product tells the story of a hundred pairs of hands, of skills and craftsmanship, of complex interwoven supply chains."
        />
        <ImpactCard
          img="https://cdn.shopify.com/s/files/1/1074/5128/files/fabric-of-finisterre-hero_480x.jpg?v=1647009535"
          title="Sustainability"
          category="Fabric of Finisterre"
          description="It’s in our DNA. We take our commitment to sustainability seriously. We choose the right fabrics to create the best possible product."
        />
      </div>
      <div id="productAndDesign" className="mt-20" ref={productDesignRef}>
        <ImpactImage
          img={
            'https://cdn.shopify.com/s/files/1/1074/5128/files/finisterre-clothing-hanging-on-rail-desktop_1500x.jpg?v=1647009613'
          }
          title="Product      & Design "
          alt="Product & Design photos from company"
        />
      </div>
    </section>
  );
};

export default Impact;
