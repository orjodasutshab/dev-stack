import React, { useState } from 'react';



const NAV_LINKS = [
  'Home',
  'Technologies',
  'Projects',
  'About',
  'Contact'
] as const;



export const Navbar: React.FC = () => {


  const [activeLink, setActiveLink] = useState<string | null>(null);

  // Controls whether the mobile dropdown menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);


  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 sm:h-18">


          {/* Left side: hamburger (mobile only) + logo, grouped together and pinned left */}

          <div className="flex items-center gap-2 sm:gap-3">

            {/*menu icon - only visible below lg, now clickable */}

            <div className="flex items-center lg:hidden">

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                className="w-8 h-8 flex items-center justify-center -ml-1 cursor-pointer"
              >
                <div className="w-5 h-3.5 flex flex-col justify-between select-none relative">

                  <span
                    className={`w-full h-0.5 bg-slate-800 rounded-full block transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                      }`}
                  />

                  <span
                    className={`w-full h-0.5 bg-slate-800 rounded-full block transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                  />

                  <span
                    className={`w-full h-0.5 bg-slate-800 rounded-full block transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                      }`}
                  />

                </div>
              </button>

            </div>


            {/* logo*/}

            <div className="flex items-center gap-2 select-none">

              <div
                className="
                  w-8 h-8
                  sm:w-9 sm:h-9
                  rounded-xl
                  bg-brand-gradient
                  flex items-center justify-center
                  text-white
                  font-black
                  text-xs sm:text-sm
                  shadow-xs
                "
              >
                DS
              </div>


              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">

                Dev
                <span className="text-brand-gradient">
                  Stack
                </span>

              </span>

            </div>

          </div>


          {/* Desktop*/}

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium select-none">

            {NAV_LINKS.map((link) => (

              <button
                key={link}
                type="button"
                onClick={() => setActiveLink(link)}
                className={`
                  transition-colors
                  cursor-pointer
                  ${activeLink === link
                    ? 'text-[#ec4899] font-medium'
                    : 'text-slate-600 hover:text-slate-900'
                  }
                `}
              >
                {link}
              </button>

            ))}

          </nav>




          <div className="flex items-center gap-3 select-none">

            <span
              id="signin-text"
              className="
                text-xs sm:text-sm
                font-semibold
                text-slate-700
                cursor-default
              "
            >
              Sign In
            </span>


            <span
              id="signup-pill"
              className="
                bg-[#ec4899]
                text-white
                text-xs sm:text-sm
                font-medium
                px-4 py-1.5
                sm:px-5 sm:py-2
                rounded-full
                shadow-xs
                cursor-default
              "
            >
              Sign Up
            </span>

          </div>


        </div>


        {/* Mobile dropdown menu - shown below lg when hamburger is open */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-1 pb-4 text-sm font-medium select-none">

            {NAV_LINKS.map((link) => (

              <button
                key={link}
                type="button"
                onClick={() => {
                  setActiveLink(link);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  text-left px-2 py-2.5 rounded-lg transition-colors cursor-pointer
                  ${activeLink === link
                    ? 'text-[#ec4899] bg-pink-50 font-medium'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }
                `}
              >
                {link}
              </button>

            ))}

          </nav>
        )}

      </div>

    </header>
  );
};