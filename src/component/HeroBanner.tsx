import React from 'react';
import bannerStackImg from '../assets/images/banner-stack.png';

// This is the top banner section of the homepage (the big heading + image).
// It doesn't need any props right now because everything on it is static text/image.
export const HeroBanner: React.FC = () => {
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

            {/* Static Design Buttons (No function, pure design matching screenshot) */}
            <div className="flex items-center justify-center lg:justify-start gap-3.5 pt-2 select-none">
              {/* Explore Technologies Pill */}
              <div
                id="explore-tech-badge"
                className="px-6 py-3 rounded-2xl text-sm font-semibold text-white bg-brand-gradient shadow-xs cursor-default flex items-center justify-center whitespace-nowrap"
              >
                Explore Technologies
              </div>

              {/* Learn More Pill */}
              <div
                id="learn-more-badge"
                className="px-6 py-3 rounded-2xl text-sm font-semibold text-slate-600 bg-white border border-slate-200 cursor-default flex items-center justify-center whitespace-nowrap"
              >
                Learn More
              </div>
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
