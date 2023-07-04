import React from 'react'
import Image from 'next/image'

const Pic = () => {
    return (
        <div className='flex flex-row -mt-24'>

            <div className=' my-auto '>

                <Image
                    className='mx-auto rounded-lg  '
                    priority
                    src="/zafarSahb.jpeg"
                    height={200}
                    width={200}
                    alt=""
                />
                <p className='text-xl sm:text-3xl  pt-10'>Maulana Hafiz<br /> Zafar Ul Islam</p>
            </div>
            <div ></div>
        </div>
    )
}

export default Pic