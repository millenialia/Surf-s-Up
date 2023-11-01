import React from 'react'
import { GiWaveSurfer } from 'react-icons/gi'

export default function SubscribeForm() {
  return (
    <form className='flex flex-col gap-5 justify-start w-1/2' >
      <h3 className='text-xl'>Get Updates on Upcoming Surf Camps</h3>
      <label className='flex flex-col gap-2 text-left'>

      <input 
      type="email" 
      placeholder='example.email.com' 
      className='h-14 px-4 text-gray-950 font-semibold focus:border-black bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none'
      required/>
      </label>

      <label className='text-[10px]'>
      <input type="checkbox" className='appearance-none mr-1 w-2 h-2 border-2 border-white checked:bg-white' 
      required/>
      I agree to receive updates and offers for surf camp trips via email.
      </label>

      <button type='submit' className='text-left text-xl'>Catch the Wave</button>
    </form>
  )
}
