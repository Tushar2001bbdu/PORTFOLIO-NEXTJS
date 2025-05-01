'use client';

import React ,{useState} from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Button, Alert, Stack } from '@mui/material';




export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const[success,setSuccess]=useState(false)
  const[status,setStatus]=useState("")
  const onSubmit = (data) => {
   
   try{
    emailjs.send("service_3t45cxj","template_4067gnr"
      ,
      data,
      "yl-4aq68v2DVWy_8B")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus("success");
        setSuccess(true);
        reset();
      })
      .catch((err) => {
        setStatus("severe");
        setSuccess(true);
        console.error('FAILED...', err);
        alert("Something went wrong.");
      });}
      catch(err){
        console.log(err)
      }
  };

  return (
    <>
    {success && (
        <Alert severity={status} onClose={() => setSuccess(false)}>
          "Your Message Has Been Sent Successfully"
        </Alert>
      )}
    <form className="max-w-md w-full flex flex-col items-center space-y-4 p-6 shadow-lg rounded-md" onSubmit={handleSubmit(onSubmit)}>
      
      <input
        type="text"
        placeholder="Name"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
        {...register("Name", { required: true, maxLength: 500, minLength: 2 })}
      />
      {errors.Name && <p className="text-red-500 text-sm">Name is required (min 2 chars)</p>}

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.Email && <p className="text-red-500 text-sm">Invalid email</p>}

      <textarea
        placeholder="Message"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
        rows="4"
        {...register("Message", { required: true })}
      />
      {errors.Message && <p className="text-red-500 text-sm">Message is required</p>}

      <input
        type="submit"
        value="Send Me Your Message"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
      />
    </form>
    </>
  );
}
