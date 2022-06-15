import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4 text-xl'>
                    <p>Hi, I'm Aniekan, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p className='text-xl'>
                    Tech guy. Programmer by education. Programmer by nature. Can be seen starting a new programming course online when not binging on anime and Netflix documentaries. Sub-culture junkie. Chicken and salad is a necessity. What is life without music?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About