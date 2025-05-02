import React from 'react'

const FailedTask = () => {


    return (
        <div>
            <div className='flex-shrink-0 h-full w-[300px] p-4 mx-auto bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam libero
                </p>
                <div className='flex  justify-between items-center mt-5'>
                    <button className='bg-red-500 text-white px-4 mx-2 py-2 rounded'>Failed</button>
                </div>
            </div>
        </div>
    )
}

export default FailedTask
