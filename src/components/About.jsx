import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-16'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4'>
                
                {/* Section Title */}
                <div className='mb-12'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 pb-2'>
                        About
                    </p>
                </div>
                
                {/* Main Content Grid */}
                <div className='grid md:grid-cols-2 gap-8'>
                    
                    {/* Left Column - Intro */}
                    <div className='space-y-6'>
                        <p className='text-2xl font-medium text-[#ccd6f6]'>
                            Hi, I'm Aniekan. Nice to meet you.
                        </p>
                        <p className='text-xl text-[#8892b0] leading-relaxed'>
                            Tech guy. Programmer by education. Programmer by nature. Can be seen starting a new programming course online when not binging on anime and Netflix documentaries. Sub-culture junkie. Chicken and salad is a necessity. What is life without music?
                        </p>
                    </div>
                    
                    {/* Right Column - Current Status & Interests */}
                    <div className='space-y-4 text-lg'>
                        <div className='flex items-start gap-3'>
                            <span className='text-pink-600 text-xl'>🔭</span>
                            <p className='text-[#8892b0]'>I'm currently working on projects that contribute positively to people's lives</p>
                        </div>
                        
                        <div className='flex items-start gap-3'>
                            <span className='text-pink-600 text-xl'>🌱</span>
                            <p className='text-[#8892b0]'>I'm currently learning Web3.0</p>
                        </div>
                        
                        <div className='flex items-start gap-3'>
                            <span className='text-pink-600 text-xl'>👯</span>
                            <p className='text-[#8892b0]'>I'm looking to collaborate on any possible ideas</p>
                        </div>
                        
                        <div className='flex items-start gap-3'>
                            <span className='text-pink-600 text-xl'>🤔</span>
                            <p className='text-[#8892b0]'>I'm looking for help with hands-on resources to learn about Web3.0 (blockchains & smart contracts)</p>
                        </div>
                        
                        <div className='flex items-start gap-3'>
                            <span className='text-pink-600 text-xl'>💬</span>
                            <p className='text-[#8892b0]'>Ask me about memes</p>
                        </div>
                        
                        <div className='flex items-start gap-3'>
                            <span className='text-pink-600 text-xl'>⚡</span>
                            <p className='text-[#8892b0]'>Fun fact: A wannabe vegetarian</p>
                        </div>
                        
                        {/* Motto */}
                        <div className='mt-6 pt-6 border-t border-gray-700'>
                            <p className='text-2xl font-bold text-[#ccd6f6] mt-2 italic'>
                                "All I can, I will."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About