import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';

const Work = () => {
  const articles = [
    {
      title: "Full-Scale SEO Audit & Implementation",
      description: "Conducted a comprehensive technical, on-page, and off-page SEO audit, resolving crawl issues, optimizing meta tags, and improving Core Web Vitals, resulting in a 45% organic traffic increase in 3 months.",
      source: "#TechnicalSEO",
      link: "",
      readLink: ""
    }, 
    {
      title: "Local SEO Optimization for a Small Business",
      description: "Optimized Google My Business profile, built local citations, and targeted geo-specific keywords—boosting local search rankings from page 3 to the top 3 results.",
      source: "#LocalSEO",
      link: "",
      readLink: ""
    },
    {
      title: "Content Strategy & Keyword Mapping", 
      description: "Created a keyword map aligned with search intent, optimized existing content, and developed a blog strategy that increased organic impressions by 70%.",
      source: "#ContentSEO",
      link: "",
      readLink: ""
    },
    {
      title: "Backlink Outreach & Authority Building",
      description: "Executed a targeted outreach campaign that secured high-authority backlinks from industry-relevant sites, increasing domain authority by 12 points.",
      source: "#LinkBuilding",
      link: "",
      readLink: ""
    }
  ];

  const nodeRefs = useRef(articles.map(() => React.createRef()));
  const [draggingIndex, setDraggingIndex] = useState(null);

  return (
    <div id="Projects" className="min-h-screen bg-liliac p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center relative z-10">
      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 lg:mb-10 text-center'>Projects.</h1>
      
      {/* Desktop and Tablet Layout */}
      <div className="hidden md:flex w-3/4 flex-wrap justify-center">
        {articles.map((article, index) => (
          <Draggable
            key={index}
            nodeRef={nodeRefs.current[index]}
            onStart={() => setDraggingIndex(index)}
            onStop={() => setDraggingIndex(null)}
          >
            <article
              ref={nodeRefs.current[index]}
              style={{ userSelect: 'none', cursor: draggingIndex === index ? 'grabbing' : 'grab' }}
              className="group relative w-80 lg:w-96 border-2 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 m-4"
            >
              <div className="absolute inset-0 bg-pink-100 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>

              <header className="flex items-center mb-4 border-b-2 w-full p-3">
                <div className='w-4 h-4 rounded-full bg-gray-800 mr-2'></div>
                <div className='w-4 h-4 rounded-full bg-gray-800 mr-2'></div>
                <div className='w-4 h-4 rounded-full bg-gray-800'></div>
              </header>

              <a
                href=""
                rel="external"
                style={{ pointerEvents: draggingIndex === index ? 'none' : 'auto' }}
                className="block p-3"
              >
                <h2 className="text-2xl lg:text-3xl font-semibold hover:color-rose hover:transition-colors">{article.title}</h2>
              </a>

              <p className="text-base lg:text-lg p-3">{article.description}</p>

              <footer className="flex justify-between items-center p-4">
                <a
                  href=""
                  rel="external"
                  style={{ pointerEvents: draggingIndex === index ? 'none' : 'auto' }}
                  className="text-lg lg:text-xl font-medium hover:color-rose transition-colors"
                >
                  {article.source}
                </a>
                <a
                  href=""
                  style={{ pointerEvents: draggingIndex === index ? 'none' : 'auto' }}
                  className="text-lg lg:text-xl font-medium hover:color-rose transition-colors flex items-center"
                >
                  Read post →
                </a>
              </footer>
            </article>
          </Draggable>
        ))}
      </div>

      <div className="md:hidden w-3/4 max-w-lg space-y-6">
        {articles.map((article, index) => (
          <article
            key={index}
            className="group relative w-full border-2 rounded-2xl bg-white hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute inset-0 bg-pink-100 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>

            <header className="flex items-center mb-4 border-b-2 w-full p-3">
              <div className='w-4 h-4 rounded-full bg-gray-800 mr-2'></div>
              <div className='w-4 h-4 rounded-full bg-gray-800 mr-2'></div>
              <div className='w-4 h-4 rounded-full bg-gray-800'></div>
            </header>

            <a href="" rel="external" className="block p-3">
              <h2 className="text-xl font-semibold hover:color-rose hover:transition-colors">{article.title}</h2>
            </a>

            <p className="text-base p-3">{article.description}</p>

            <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4">
              <a
                href=""
                rel="external"
                className="text-lg font-medium hover:color-rose transition-colors"
              >
                {article.source}
              </a>
              <a
                href=""
                className="text-lg font-medium hover:color-rose transition-colors flex items-center"
              >
                Read post →
              </a>
            </footer>
          </article>
        ))}
      </div>

      <a href="https://github.com/Sofi-cu" target='_' className="mt-8 lg:mt-10 p-3 lg:p-4 border shadow-2xl cursor-pointer button text-lg lg:text-xl text-black font-bold bg-white">
        Check out my Github...
      </a>
    </div>
  );
};

export default Work;