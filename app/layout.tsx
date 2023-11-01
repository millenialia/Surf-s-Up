import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Surf's Up Adventures`,
  description: `Ride the Waves with Surf's Up Adventures`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-300`}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
