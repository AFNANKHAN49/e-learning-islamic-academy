import React from 'react'
import Image from 'next/image'

const Pic = () => {
    return (
        <div className='grid grid-rows2 col-span-1 '>

            <div className=' my-auto '>

                <Image
                    className='mx-auto rounded-lg  '
                    priority
                    src="/zafarSahb.jpeg"
                    height={200}
                    width={200}
                    alt=""
                />
                <p className='text-3xl pt-10'>Maulana Hafiz Zafar Ul Islam</p>
            </div>
            <div ></div>
        </div>
    )
}

export default Pic