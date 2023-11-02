"use client"

import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {postEmailRequest} from '@/lib/helpers/postEmailRequest'

export default function SubscribeForm() {

  const [email, setEmail] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    if(!email || !agree ){
      toast("Email and Agreement fields are required",
        {
          style: {
            background: 'rgba(246, 71, 71,0.7)',
            color: '#fff',
          },
        }
      ) 
      return
    }

    postEmailRequest(email)

    setAgree(false)
    setEmail('')
  }


  return (
    <form className='flex flex-col gap-5 justify-start w-1/2' onSubmit={handleSubmit}>
      <h3 className='text-xl'>Get Updates on Upcoming Surf Camps</h3>
      <label className='flex flex-col gap-2 text-left'>

      <input 
      type="email" 
      id="email"
      placeholder='example@mail.com' 
      className='h-14 px-4 text-gray-950 font-semibold focus:border-black bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none'
      onChange={(e)=> setEmail(e.target.value)}
      value={email}
      />
      </label>

      <label className='text-[10px]'>
      <input type="checkbox" 
      id="agree"
      defaultChecked={false}
      className='appearance-none mr-1 w-2 h-2 border-[1px] border-white checked:bg-white'
      onChange={(e)=> setAgree(true)}
      value={agree} 
      />
      I agree to receive updates and offers for surf camp trips via email.
      </label>

      <button type='submit' className='text-left text-xl'>Catch the Wave</button>
    </form>
  )
}
