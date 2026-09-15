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

            <a
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

            <a
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

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>

          </div>


          

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

              <span className="cursor-default">
                Privacy
              </span>

              <span className="cursor-default">
                Terms
              </span>

            </div>

          </div>

        </div>



        

        <div className="hidden md:block">

          

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

            


            

            <div className="lg:col-span-5 space-y-4">

             

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

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 transition-colors"
                >
                  GitHub
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 transition-colors"
                >
                  Twitter
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 transition-colors"
                >
                  LinkedIn
                </a>

              </div>

            </div>



            

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
                  <span className="cursor-default">
                    Home
                  </span>
                </li>

                <li>
                  <span className="cursor-default">
                    Technologies
                  </span>
                </li>

                <li>
                  <span className="cursor-default">
                    Projects
                  </span>
                </li>

              </ul>

            </div>



            

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
                  <span className="cursor-default">
                    About
                  </span>
                </li>

                <li>
                  <span className="cursor-default">
                    Contact
                  </span>
                </li>

                <li>
                  <span className="cursor-default">
                    Careers
                  </span>
                </li>

              </ul>

            </div>



            

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
                  <span className="cursor-default">
                    Privacy Policy
                  </span>
                </li>

                <li>
                  <span className="cursor-default">
                    Terms of Service
                  </span>
                </li>

              </ul>

            </div>

          </div>



          

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

              <span className="cursor-default">
                Privacy
              </span>

              <span className="cursor-default">
                Terms
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};
