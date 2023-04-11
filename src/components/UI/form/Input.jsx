import React from 'react';
import { useFormContext } from 'react-hook-form';

const Input = ({ id, label, placeholder, name, className, type }) => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor={id} className="block mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`${className} w-10/12 mb-5 p-4 border border-[black] bg-transparent  placeholder-[black] tracking-wider  focus:outline-none`}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default Input;
