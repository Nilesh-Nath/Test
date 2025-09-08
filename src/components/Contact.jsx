import React from 'react';

export default function Contact() {
  return (
    <div id="Contact" className="min-h-screen bg-mint flex justify-center items-center slide-out z-9 p-4 sm:p-6 lg:p-8">
      <div className="relative bg-white w-full max-w-6xl lg:w-3/4 lg:h-3/5 flex flex-col lg:flex-row items-center p-6 sm:p-8 lg:p-10 overflow-visible rounded-lg lg:rounded-none">
        
        {/* Text content */}
        <div className="w-full lg:w-1/2 lg:p-14 mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-5 text-center lg:text-left">
            I'm always up for a chat.
          </h2>
          <p className="mb-6 text-lg sm:text-xl text-center lg:text-left">
            <a href="mailto:khadkasofiya7@gmail.com" className="font-bold underline">
              Pop me an email
            </a>{' '}
            at khadkasofiya7@gmail.com or give me a shout on social media.
          </p>

          <div className="flex gap-5 justify-center lg:justify-start mb-8 lg:mb-0">
            <a href="/"><img src="/X.svg" alt="X" width="24" /></a>
            <a href="/"><img src="/linkedIn.svg" alt="LinkedIn" width="24" /></a>
            <a href="https://github.com/Sofi-cu" target='_'><img src="/Git.svg" alt="Git" width="24" /></a>
            <a href="https://www.instagram.com/page.sofiya" target='_'><img src="/instagram.svg" alt="instagram" width="24" /></a>
          </div>

          {/* blehh */}
          <p className="text-4xl sm:text-5xl lg:text-6xl font-cursive font-extrabold text-center lg:absolute lg:bottom-[-20px] lg:left-10 lg:text-left">
            Hey there
          </p>
        </div>

        {/* Image section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <img
            src="/contact.png"
            alt="Profile Top"
            className="w-full max-w-sm lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}