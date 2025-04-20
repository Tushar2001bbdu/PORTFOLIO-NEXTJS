"use client"; // Only if you're using Next.js app directory

import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form className="max-w-md  w-full flex flex-col items-center justify-content-center space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
         className='w-full'
        {...register("Name", { required: true, maxLength: 500, minLength: 2 })}
      />
      {errors.Name && <p>Name is required (min 2 chars)</p>}

      <input
        type="text"
        placeholder="Email"
        className='w-full'
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.Email && <p>Invalid email</p>}

      <input
        type="text"
        placeholder="Message"
         className='w-full'
        {...register("Message", { required: true })}
      />
      {errors.Message && <p>Message is required</p>}

      <input type="submit" />
    </form>
  );
}
