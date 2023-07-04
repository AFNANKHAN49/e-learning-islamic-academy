import React from 'react'
import WhatsappSvg from './svgs/WhatsappSvg'
import EmailSvg from './svgs/EmailSvg'

const Contacts = () => {
    return (
        <div className=' flex  leading-big sm:leading-loose lg:leading-normal'>
            <div className='text-left my-auto flex-1 '>
                <h1 className=' font-extrabold pb-3 text-2xl sm:text-2xl md:text-5xl  underline'>Contacts</h1>
                <ul className=" list-inside text-justify   ">
                    <li>
                        <label className='flex -mb-8'><WhatsappSvg />Whatsapp</label><br />
                        <label>+92 348-5512184</label>
                    </li>
                    <li className=''>
                        <label className='flex -mb-8'><EmailSvg />Email</label><br />
                        <label className='break-all '>zafarulIslam304@gmail.com</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contacts