import React from 'react';

const FormError = ({ errorTrue }) => {
  return errorTrue ? (
    <p className="text-[#B00020]">{errorTrue.message}</p>
  ) : null;
};

export default FormError;
