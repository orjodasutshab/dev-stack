import React from 'react';
import bannerStackImg from '../assets/images/banner-stack.png';

// This is the top banner section of the homepage (the big heading + image).
// It doesn't need any props right now because everything on it is static text/image.
export const HeroBanner: React.FC = () => {

  // Smoothly scrolls down to the technology grid section when
  // "Explore Technologies" is clicked. Assumes the technology grid
  // section has id="technologies" (see App.tsx / the section that
  // renders the TechCard grid).
  const scrollToTechnologies = () => {
    document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
  };

  // "Learn More" scrolls down to the About section of the page.
  // If you don't have a section with id="about" yet, add one to
  // whichever part of the page explains the project.
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-2 sm:pb-8 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Heading, Description, and CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Two-Tone Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight sm:leading-[1.12]">
              Build Your Ideal <br />
              <span className="text-brand-gradient">
                Development Stack
              </span>
            </h1>

            {/* Description Text */}
            <p className="text-sm sm:text-lg text-slate-500 max-w-sm sm:max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* Interactive CTA Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-3.5 pt-2 select-none">
              {/* Explore Technologies Button (gradient) */}
              <button
                type="button"
                id="explore-tech-btn"
                onClick={scrollToTechnologies}
                className="px-6 py-3 rounded-2xl text-sm font-semibold text-white bg-brand-gradient shadow-xs hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center whitespace-nowrap"
              >
                Explore Technologies
              </button>

              {/* Learn More Button (outlined) */}
              <button
                type="button"
                id="learn-more-btn"
                onClick={scrollToAbout}
                className="px-6 py-3 rounded-2xl text-sm font-semibold text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center whitespace-nowrap"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-1 sm:pt-0">
            <div className="w-full max-w-[340px] sm:max-w-md lg:max-w-[480px] flex items-center justify-center">
              <img
                src={bannerStackImg}
                alt="3D Development Stack"
                className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] h-auto object-contain select-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
