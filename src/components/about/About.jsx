import React from 'react';
import ImpactImage from '../impact_page/ImpactImage';

const About = () => {
  return (
    <>
      <div className="flex items-end md:items-center h-[30rem]  md:h-[25rem] relative mb-20">
        <img
          className="object-cover w-full h-full inset-0 absolute"
          src="https://cdn.shopify.com/s/files/1/1074/5128/files/finisterre-history-beach-tent-landscape_1500x.jpg?v=1642055443"
          alt="Place of Fashion Frenzy"
        />
      </div>

      {/* ABOUT TITLE */}
      <div className="grid grid-cols-12 md:ml-10 mb-[4.5rem]">
        <div className="col-span-4  max-lg:col-span-6 max-md:col-span-9 max-sm:col-span-12 max-sm:mx-2 ">
          <h1 className="m-auto text-center ">About The Brand </h1>
        </div>
      </div>

      {/* ABOUT H3 */}
      <div className="grid grid-cols-12">
        <div className="col-span-5 max-lg:col-span-6 max-md:col-span-7 max-sm:col-span-12 mx-10 max-sm:mx-2  my-10 ">
          <h3 className="h3 m-auto">
            Born in 2003 from the needs of hardy British surfers, Fashion Frenzy
            designs functional and sustainable product for those that share a
            love of the sea.
          </h3>
        </div>
      </div>

      {/* ABOUT PARAGRAPH */}
      <div className="grid grid-cols-12">
        <div className="col-span-4 md:col-span-11 ml-4 lg:col-span-6 lg:col-start-4 mb-14 mb-18 max-sm:col-span-11">
          <p className="mb-4">
            It started in 2003 in a flat above a surf shop with an innovative
            fleece that was designed to keep out chill winds and warm up cold
            bodies. Since these early days, driven by those who have jumped on
            board, supported by our customers and suppliers, the brand and
            product has widened beyond these original beginnings. Yet from our
            cliff top workshop in St. Agnes, we stay true to our original design
            ethos of functionality and sustainability brought to life in an
            understated style and identity, always remaining committed to
            product, environment and people.
          </p>
          <p className="mb-4">
            The name of one of the most rugged headlands that bravely bears the
            full brunt of the North Atlantic gales, and a former shipping
            forecast area, Fashion Frenzy literally means end of the earth or
            land’s end. The place where land ends has intrigued man for
            centuries, fostering both a real and a romantic relationship with
            the sea; a relationship that runs deep in our narrative.
          </p>
          <p className="mb-4">
            Since day one we have taken a pioneering approach to making better
            and more sustainable product, challenging and innovating, seeking
            alternatives to what has gone before. We’re committed to making
            informed decisions about our impact on the environment and are
            constantly trying to push boundaries to make the best product we
            can. In our eyes this is gear that will be with you the longest; and
            the longer you have it, the more attached to it you become.
          </p>
        </div>
      </div>
      <ImpactImage
        img="https://cdn.shopify.com/s/files/1/1074/5128/files/finisterre-history-founder-tom-kay-landscape_1500x.jpg?v=1642055443"
        title="Eduardo Cruz, Fashion Frenzy Founder"
        alt="fictional name and picture"
      />
    </>
  );
};

export default About;
