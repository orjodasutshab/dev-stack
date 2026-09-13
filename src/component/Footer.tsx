import React from 'react';


// Footer Component
export const Footer: React.FC = () => {

  return (
    <footer
      className="
        bg-white
        border-t border-slate-100
        text-slate-600
        pt-10
        pb-8
        mt-16
        md:mt-20
      "
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* ==================================================
            MOBILE FOOTER
        ================================================== */}

        <div
          className="
            md:hidden
            flex flex-col
            items-center
            text-center
            space-y-3.5
            max-w-sm
            mx-auto
          "
        >

          {/* Logo */}

          <div className="flex items-center gap-2">

            <div
              className="
                w-8 h-8
                rounded-xl
                bg-brand-gradient
                flex items-center justify-center
                text-white
                font-black
                text-xs
                shadow-xs
              "
            >
              DS
            </div>

            <span
              className="
                text-xl
                font-black
                text-slate-900
                tracking-tight
              "
            >
              Dev
              <span className="text-brand-gradient">
                Stack
              </span>
            </span>

          </div>


          {/* Description */}

          <p
            className="
              text-xs
              text-slate-500
              leading-relaxed
              max-w-xs
            "
          >
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>


          {/* Social Links */}

          <div
            className="
              flex items-center
              justify-center
              gap-3
              text-xs
              text-slate-600
              font-medium
            "
          >

            
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>

            <span className="text-slate-400">
              •
            </span>

            
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              Twitter
            </a>

            <span className="text-slate-400">
              •
            </span>

            
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>

          </div>


          {/* Mobile Bottom Bar */}

          <div
            className="
              w-full
              border-t border-slate-100
              pt-4
              mt-2
              flex
              items-center
              justify-between
              text-[11px]
              text-slate-400
            "
          >

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center gap-3">

              <a href="#" className="hover:text-slate-700 transition-colors">
                Privacy
              </a>

              <a href="#" className="hover:text-slate-700 transition-colors">
                Terms
              </a>

            </div>

          </div>

        </div>



        {/* ==================================================
            DESKTOP FOOTER
        ================================================== */}

        <div className="hidden md:block">

          {/* Main Footer Content */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-12
              gap-10
              pb-14
              border-b border-slate-100
            "
          >


            {/* ================= LOGO + DESCRIPTION ================= */}

            <div className="lg:col-span-5 space-y-4">

              {/* Logo */}

              <div className="flex items-center gap-2.5">

                <div
                  className="
                    w-8 h-8
                    rounded-lg
                    bg-brand-gradient
                    flex items-center justify-center
                    text-white
                    font-black
                    text-xs
                    shadow-xs
                  "
                >
                  DS
                </div>

                <span
                  className="
                    text-xl
                    font-black
                    text-slate-900
                    tracking-tight
                  "
                >
                  Dev
                  <span className="text-brand-gradient">
                    Stack
                  </span>
                </span>

              </div>


              {/* Description */}

              <p
                className="
                  text-sm
                  text-slate-500
                  leading-relaxed
                  max-w-sm
                "
              >
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>


              {/* Social Links */}

              <div
                className="
                  flex items-center
                  gap-6
                  pt-3
                  text-sm
                  text-slate-600
                  font-medium
                "
              >

                
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 transition-colors"
                >
                  GitHub
                </a>

                
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 transition-colors"
                >
                  Twitter
                </a>

                
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 transition-colors"
                >
                  LinkedIn
                </a>

              </div>

            </div>



            {/* ================= PRODUCT ================= */}

            <div className="lg:col-span-2 space-y-4">

              <h4
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-wider
                  text-slate-900
                "
              >
                PRODUCT
              </h4>

              <ul className="space-y-3.5 text-sm text-slate-500">

                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Technologies
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Projects
                  </a>
                </li>

              </ul>

            </div>



            {/* ================= COMPANY ================= */}

            <div className="lg:col-span-2 space-y-4">

              <h4
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-wider
                  text-slate-900
                "
              >
                COMPANY
              </h4>

              <ul className="space-y-3.5 text-sm text-slate-500">

                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Contact
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Careers
                  </a>
                </li>

              </ul>

            </div>



            {/* ================= LEGAL ================= */}

            <div className="lg:col-span-3 space-y-4">

              <h4
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-wider
                  text-slate-900
                "
              >
                LEGAL
              </h4>

              <ul className="space-y-3.5 text-sm text-slate-500">

                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Terms of Service
                  </a>
                </li>

              </ul>

            </div>

          </div>



          {/* ================= BOTTOM BAR ================= */}

          <div
            className="
              pt-6
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-4
              text-xs
              text-slate-500
            "
          >

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>


            <div className="flex items-center gap-6">

              <a href="#" className="hover:text-slate-700 transition-colors">
                Privacy
              </a>

              <a href="#" className="hover:text-slate-700 transition-colors">
                Terms
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};
