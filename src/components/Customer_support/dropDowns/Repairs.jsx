import React from 'react';
import DropDown from '../../UI/dropDowns/DropDown';

const Repairs = () => {
  return (
    <div>
      <h3 className="h3 my-8"> Repairs </h3>
      <DropDown
        title="I've damaged my favourite Fashion Frenzy jacket/jumper/item. What can I do?"
        items={[
          'Never fear! We have our very own in house repairs here at Fashion Frenzy who are dedicated to breathing life and happiness back into your beloved Fashion Frenzy favourites. You can now book a repair online here - https://fashionfrenzy.com/repair - then simply follow the instructions and send the item to us, for our repairs team to get started on',
        ]}
      />
      <DropDown
        title="How long will my Repair take?"
        items={[
          'Our team are super-efficient, but to get the best results can take time. We will do our best to get your items repaired within 4-6 weeks. This can change dependant of the time of year, so please bear this in mind.',
        ]}
      />
      <DropDown
        title="Can I get any non-Fashion Frenzy items repaired?"
        items={[
          'Unfortunately, for now we are only able to repair Fashion Frenzy Items, so our apologies for any disappointment.',
        ]}
      />
      <DropDown
        title="What do I need to do before I send in my gear?"
        items={[
          'Wash the garment, taking care to follow wash-care instructions on product care label, send back using instructions shared with you via email',
        ]}
      />
    </div>
  );
};

export default Repairs;
