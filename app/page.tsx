import Image from 'next/image'
import background from '../public/background.jpg'
import { Montserrat } from 'next/font/google'
import Headings from '@/components/Headings'
import SubscribeForm from '@/components/SubscribeForm'

const readex = Montserrat({
  subsets:['latin'],
  weight: '300',
})

export default function Home() {
  return (
    <main className={`${readex.className} flex flex-col`}>
      <div className='absolute -z-10 w-full h-full '>
        <Image
          src={background} alt='background image'
          className='brightness-[.8] w-full h-full' width={1000} height={1000}/>
      </div>
      <div className='max-w-screen-lg ml-20 mt-20 flex flex-col gap-20'>
      <Headings/>
      <SubscribeForm/>
      </div>
      
    </main>
  )
}
