import React from 'react';

export default function PortfolioPage() {
  const sections = [
    {
      id: 'Hr',
      label: '2025',
      title: 'Human resource Intern at CMS Nepal',
      content: [
        'I worked as an HR Intern at CMS Nepal, assisting with recruitment, onboarding, and employee record management. I gained hands-on experience in candidate sourcing, screening, and scheduling interviews.',
        'Alongside HR tasks, I collaborated with the digital team to optimize job postings and internal content for SEO, improving online visibility and engagement. This role allowed me to blend HR responsibilities with digital strategy initiatives.'
      ]
    }
  ];

  return (
    <div id="About" className="min-h-screen bg-sherbet p-4 sm:p-8 lg:p-32 xl:p-52 relative z-10">
      <div className="w-full lg:w-3/4 m-auto">
        
        {/* About section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-16 lg:mb-32">
          <div className="flex-1 max-w-full lg:max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8">About.</h1>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
             I'm Sofiya Khadka, an IT graduate specializing in SEO and digital strategy. I help brands become more visible and competitive online by combining technical skills with creative optimization.
            </p>
            <p className="text-base sm:text-lg mb-6 lg:mb-8 leading-relaxed">
              I turn data and keywords into content that resonates with both search engines and people. I also share my knowledge through talks, writing, and workshops, exploring new ways to navigate the digital world.
            </p>
            <a 
              href="/resume.pdf" 
              download="SofiyaKhadka_Resume.pdf"
              className="text-base sm:text-lg text-gray-800 underline hover:text-gray-600 transition-colors font-medium"
            >
              Download my Resume
            </a>
          </div>
          
          {/* Image section */}
          <div className="w-full m-auto sm:w-80 md:w-96 lg:w-[450px] xl:w-[550px] 2xl:w-[650px] flex-shrink-0 mt-8 lg:mt-0">
            <div className="relative">
              <img src='/about.png' alt='about' className='w-full h-auto object-cover rounded-lg ' />
            </div>
          </div>
        </div>

        {/* Experience sections */}
        {sections.map((section, index) => (
          <div 
            id="Work"
            key={section.id} 
            className={`flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-8 ${index < sections.length - 1 ? 'mb-16 lg:mb-32' : ''}`}
          >
            {/* Year label */}
            <div className="w-full lg:w-32 flex-shrink-0 pt-2 mb-4 lg:mb-0">
              <div className="transform lg:-rotate-12 origin-left">
                <span className="text-xl lg:text-2xl font-bold">
                  {section.label}
                </span>
              </div>
            </div>
            
            {/* Divider - hidden on mobile */}
            <div className="hidden lg:block w-16 flex-shrink-0 pt-4">
              <div className="w-full border-1 bg-gray-800"></div>
            </div>
            
            {/* Content */}
            <div className="flex-1 max-w-full lg:max-w-3xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 lg:mb-6 leading-tight font-cursive">
                {section.title}
              </h3>
              {section.content.map((paragraph, pIndex) => (
                <p 
                  key={pIndex} 
                  className={`text-base sm:text-lg leading-relaxed ${
                    pIndex < section.content.length - 1 ? 'mb-4 lg:mb-6' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}