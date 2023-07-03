import React from 'react'
import TickSvg from './TickSvg'
import MeetSvg from './svgs/MeetSvg'
import ZoomSvg from './svgs/ZoomSvg'

const Courses = () => {
    return (
        <div className=' grid  grid-rows-2 col-span-2'>
            <div className='text-left pl-32  my-auto '>
                <h1 className=' font-extrabold pb-3 text-5xl  underline'>Courses</h1>
                <ul className=" list-disc list-inside text-justify">
                    <li className='flex '><TickSvg />Quran Teaching</li>
                    <li className='flex '><TickSvg />Darse-Nizami</li>
                    <li className='flex '><TickSvg />Tajweed</li>
                    <li className='flex '><TickSvg />Tafseer-Quran</li>
                    <li className='flex '><TickSvg />Usool-e-Fiqqa</li>
                </ul>
            </div>

            <div className='text-left pl-32  my-auto'>
                <h1 className=' font-extrabold pb-3 text-5xl  underline'>Classes</h1>
                <ul className=" list-disc list-inside text-justify">
                    <li className='flex '><MeetSvg />Google Meet</li>
                    <li className='flex '><ZoomSvg />Zoom</li>
                </ul>
            </div>

        </div>
    )
}

export default Courses