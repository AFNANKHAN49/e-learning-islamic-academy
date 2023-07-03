import { Inter } from 'next/font/google'
import Contacts from '@/components/Contacts'
import Pic from '@/components/Pic'
import Courses from '@/components/Courses'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col-reverse lg:grid lg:grid-cols-5  text-gray-300 text-center h-screen font-extrabold text-xl' id='container'>
      <Courses />
      <Pic />
      <Contacts />
    </main>
  )
}
