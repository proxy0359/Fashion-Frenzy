import React, { useEffect, useState } from 'react';

const Alert = ({ isTrue, message }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isTrue) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 10000);
    }
  }, [isTrue, setShow]);
  return show ? (
    <div className="bg-[#5cb85cbd] w-10/12 flex justify-center items-center pt-4  mb-10">
      <p className="text-black  ">{message}</p>
    </div>
  ) : null;
};

export default Alert;
