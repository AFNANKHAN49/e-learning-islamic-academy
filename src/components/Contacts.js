import React from 'react'
import WhatsappSvg from './svgs/WhatsappSvg'
import EmailSvg from './svgs/EmailSvg'

const Contacts = () => {
    return (

        <div className=' grid grid-rows-2 col-span-2'>
            <div className='text-left pl-32  my-auto '>
                <h1 className=' font-extrabold pb-3 text-5xl  underline'>Contacts</h1>
                <ul className=" list-inside text-justify space-y-3">
                    <li>
                        <label className='flex -mb-8'><WhatsappSvg />Whatsapp</label><br />
                        <label>+92 346 - 5512184</label>
                    </li>
                    <li>
                        <label className='flex -mb-8'><EmailSvg />Email</label><br />
                        <label>zafarulIslam304@gmail.com</label>
                    </li>

                </ul>
            </div>

            <div className=''>
            </div>

        </div>
    )
}

export default Contacts