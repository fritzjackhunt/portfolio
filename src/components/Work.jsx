/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import Work1 from '../assets/work.png'
import Work2 from '../assets/work1.png'
import Work3 from '../assets/work2.png'
import Work4 from '../assets/work3.png'
import Work5 from '../assets/work4.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl'>Work</p>
                <p className='text-lg'>// Check out some of my recent works</p>
            </div>

            {/* Container */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div 
                style={{backgroundImage : `url(${Work1})`}} 
                className='shadow=lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Admin Dashboard
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a target="_blank"  href="https://fritzjackhunt.github.io/admin-dashboard/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a target="_blank" href="https://github.com/fritzjackhunt/admin-dashboard">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage : `url(${Work2})`}} 
                className='shadow=lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Etch-A-Sketch
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a target="_blank" href="https://fritzjackhunt.github.io/etch-a-sketch/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a target="_blank" href="https://github.com/fritzjackhunt/etch-a-sketch">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div 
                style={{backgroundImage : `url(${Work3})`}} 
                className='shadow=lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Tic-Tac-Toe
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a target="_blank" href="https://fritzjackhunt.github.io/tic-tac-toe/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a target="_blank" href="https://github.com/fritzjackhunt/tic-tac-toe">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage : `url(${Work4})`}} 
                className='shadow=lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Rock Paper Scissors
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a target="_blank" href="https://fritzjackhunt.github.io/rockpaperscissors/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a target="_blank" href="https://github.com/fritzjackhunt/rockpaperscissors/tree/rps-ui">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div 
                style={{backgroundImage : `url(${Work5})`}} 
                className='shadow=lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Calculator
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a target="_blank" href="https://fritzjackhunt.github.io/calculator/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a target="_blank" href="https://github.com/fritzjackhunt/calculator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage : `url(${WorkImg})`}} 
                className='shadow=lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work