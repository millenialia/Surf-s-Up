"use client"

import React from 'react'
import {postEmailRequest} from '@/lib/helpers/postEmailRequest'
import { useForm } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'

export default function SubscribeForm() {

  const {
    register,
    handleSubmit,
    formState:{errors, isSubmitting},
    reset,
  } = useForm()

  const onSubmit = async(data:FieldValues) =>{
    await postEmailRequest(data.email);
    reset()
  }


  return (
    <form className='flex flex-col gap-5 justify-start max-w-[80%] sm:w-1/2' 
    onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className='text-base md:text-xl'>Get Updates on Upcoming Surf Camps</h3>
      <label className='flex flex-col gap-2 text-left'>

      <input 
      type="email" 
      placeholder='example@mail.com' 
      className='h-14 px-4 text-gray-950 font-semibold focus:border-black bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none'
      {
        ...register('email',{
          required: 'Email is required'
        })
      }
      />
      {
        errors.email && (
          <p className='text-red-400 text-[10px]'>{`${errors.email.message}`}</p>
        )
      }
      </label>

      <label className='text-[10px] cursor-pointer'>
      <input type="checkbox" 
      className='appearance-none mr-1 w-2 h-2 border-[1px] border-white checked:bg-white'
      {
        ...register('agree',{
          required: 'Agreement is required'
        })
      }
      />
      I agree to receive updates and offers for surf camp trips via email.
      {
        errors.agree && (
          <p className='text-red-400 text-[10px]'>{`${errors.agree.message}`}</p>
        )
      }
      </label>

    

      <button type='submit' 
      disabled={isSubmitting} 
      className='text-base md:text-xl w-[200px] h-12 border-[1px] p-2 text-center hover:bg-black/20 hover:text-[20.5px] transition-all disabled:hover:bg-transparent'>
      {isSubmitting ? (<div className=' m-auto h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>) :
        ('Catch the Wave')}
        </button>
    </form>
  )
}
