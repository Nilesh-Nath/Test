import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
       <div className="min-h-screen w-full flex bg-mint absolute top-0 z-10">
            {/* Left side image - only visible on screens 1540px and above */}
            <div className="hidden xl:w-2/6 bg-white xl:flex flex-col justify-center items-center relative cursor-pointer">
                <img className='absolute top-0 left-80' width='800px' src='/hero.svg' alt='lamp' />

            </div>

             <div className="hidden sm-screen">
                <img className='' width='800px' src='/hero.svg' alt='lamp' />
            </div>
            
            {/* Main content area */}
            <div className="w-full xl:w-2/3 bg-mint flex justify-center items-center px-4 sm:px-6 lg:px-8">
            
                <div className='w-full max-w-4xl xl:w-1/2'>
                    {/* Greeting section */}
                    <div className="mb-4 sm:mb-6 lg:mb-4 text-lg font-medium flex">
                        <p className="cursor-pointer font-cursive Hero__eyebrow text-4xl sm:text-4xl lg:text-5xl hover:scale-125 transition-all duration-500">
                            👋 Hi Im Sofi
                        </p>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
                        Crafting visibility that{" "}
                        <span className="text-transparent cursor-pointer" 
                            style={{WebkitTextStroke: '2px #374151', WebkitTextFillColor: 'transparent'}}>
                        search engines
                        </span>
                        <span className="font-extrabold"> and </span>
                        <span className="text-transparent cursor-pointer"
                            style={{WebkitTextStroke: '2px #374151', WebkitTextFillColor: 'transparent'}}>
                        people
                        </span>{" "}
                        &{" "}
                        <span className="text-transparent cursor-pointer"
                            style={{WebkitTextStroke: '2px #374151', WebkitTextFillColor: 'transparent'}}>
                        can't resist.
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero