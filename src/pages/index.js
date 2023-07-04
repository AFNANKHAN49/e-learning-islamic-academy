import { Inter } from 'next/font/google'
import Contacts from '@/components/Contacts'
import Pic from '@/components/Pic'
import Courses from '@/components/Courses'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-row gap-4 sm:gap-10 md:gap-24 lg:gap-40 justify-center text-gray-300 text-center h-screen font-extrabold text-custom sm:text-sm md:text-md lg:text-xl' id='container'>
      <Courses />
      <Pic />
      <Contacts />
    </main>
  )
}
