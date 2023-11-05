import Image from 'next/image'
import background from '../public/background.jpg'
import { Montserrat } from 'next/font/google'
import Headings from '@/components/Headings'
import SubscribeForm from '@/components/SubscribeForm'

const montserrat = Montserrat({
  subsets:['latin'],
  weight: '300',
})

export default function Home() {
  return (
    <main className={`${montserrat.className} flex flex-col`}>
      <div className='absolute -z-10 w-full h-full '>
          <Image
            src={background}
            alt='background image'
            layout="fill"
            objectFit="cover"
            objectPosition="right center"
            className='brightness-[.4] md:brightness-[.8]'
          />
      </div>
      <div className='max-w-screen-lg ml-10 mt-10 sm:ml-20 sm:mt-20 flex flex-col'>
      <Headings/>
      <SubscribeForm/>
      </div>
      
    </main>
  )
}
