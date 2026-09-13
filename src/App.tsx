import React, { useEffect, useState } from 'react';

import { Loader2 } from 'lucide-react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Technology, StackItem } from './types';

import { Navbar } from './component/Navbar';
import { HeroBanner } from './component/HeroBanner';
import { TechCard } from './component/TechCard';
import { StackSidebar } from './component/StackSidebar';
import { Footer } from './component/Footer';


// ==================================================
// APP COMPONENT
// ==================================================

export default function App() {


  // --------------------------------------------------
  // Technologies
  // JSON file থেকে technologies এখানে রাখা হবে
  // --------------------------------------------------

  const [technologies, setTechnologies] = useState<Technology[]>([]);


  // --------------------------------------------------
  // Loading State
  // Technology data load হওয়ার সময় এটি true থাকবে
  // --------------------------------------------------

  const [isLoading, setIsLoading] = useState<boolean>(true);


  // --------------------------------------------------
  // Error State
  // Data load করতে সমস্যা হলে error এখানে থাকবে
  // --------------------------------------------------

  const [loadError, setLoadError] = useState<string | null>(null);


  // --------------------------------------------------
  // User Stack
  // User যেসব technology select করবে
  // সেগুলো এখানে রাখা হবে
  // --------------------------------------------------

  const [stack, setStack] = useState<StackItem[]>([]);



  // ==================================================
  // REMOVE URL HASH
  // ==================================================

  useEffect(() => {

    if (window.location.hash) {

      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );

    }

  }, []);



  // ==================================================
  // LOAD TECHNOLOGIES
  // ==================================================

  useEffect(() => {

    let isMounted = true;

    // Data load শুরু
    setIsLoading(true);


    fetch('/technologies.json')

      // Response check
      .then((res) => {

        if (!res.ok) {

          throw new Error(
            `Failed to load technologies (Status: ${res.status})`
          );

        }

        return res.json();

      })


      // JSON data পাওয়া গেলে
      .then((data: Technology[]) => {

        if (isMounted) {

          setTechnologies(data);

          setIsLoading(false);

        }

      })


      // কোনো error হলে
      .catch((err) => {

        console.error(
          'Error loading JSON data:',
          err
        );


        if (isMounted) {

          setLoadError(
            err.message || 'Failed to load technologies'
          );

          setIsLoading(false);

        }

      });


    // Component unmount হলে
    return () => {

      isMounted = false;

    };

  }, []);



  // ==================================================
  // ADD TECHNOLOGY TO STACK
  // ==================================================

  const handleAddToStack = (tech: Technology) => {


    // Technology আগে থেকেই আছে কিনা check
    const alreadyExists = stack.some(
      (item) => item.id === tech.id
    );


    // যদি আগে থেকেই থাকে
    if (alreadyExists) {

      toast.warning(
        `${tech.name} is already in your stack.`,
        {
          toastId: `duplicate-${tech.id}`,
        }
      );

      return;

    }


    // নতুন Stack Item তৈরি
    const newItem: StackItem = {

      ...tech,

      addedAt: Date.now(),

    };


    // Stack এর মধ্যে নতুন item যোগ
    setStack((prev) => [
      ...prev,
      newItem,
    ]);


    // Success message
    toast.success(
      `${tech.name} added to your stack!`
    );

  };



  // ==================================================
  // REMOVE ONE TECHNOLOGY
  // ==================================================

  const handleRemoveItem = (id: string) => {


    // যে technology remove করা হচ্ছে
    // সেটি খুঁজে বের করা
    const removedTech = stack.find(
      (item) => item.id === id
    );


    // Technology remove করা
    setStack((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );


    // Remove হওয়ার notification
    if (removedTech) {

      toast.info(
        `${removedTech.name} removed from your stack.`
      );

    }

  };



  // ==================================================
  // REMOVE ALL TECHNOLOGIES
  // ==================================================

  const handleRemoveAll = () => {


    // Stack empty হলে কিছু করার দরকার নেই
    if (stack.length === 0) {
      return;
    }


    // সব technology remove
    setStack([]);


    // Notification
    toast.info(
      'All technologies removed from your stack.'
    );

  };



  // ==================================================
  // PAGE LAYOUT
  // ==================================================

  return (

    <div
      className="
        min-h-screen
        bg-white
        flex
        flex-col
        font-sans
        selection:bg-rose-500
        selection:text-white
      "
    >


      {/* ==================================================
          TOAST NOTIFICATIONS
      ================================================== */}

      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        theme="light"
        aria-label="Notifications"
      />



      {/* ==================================================
          NAVBAR
      ================================================== */}

      <Navbar />



      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <main className="flex-1 w-full">


        {/* Hero Section */}

        <HeroBanner />



        {/* ==================================================
            TECHNOLOGIES SECTION
        ================================================== */}

        <section
          id="technologies"
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            pt-1
            sm:pt-4
            pb-20
          "
        >


          {/* Section Heading */}

          <div className="mb-8 text-center">

            <h2
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-extrabold
                text-[#0f172a]
                tracking-tight
              "
            >
              Explore the{' '}

              <span className="text-brand-gradient">
                Technologies
              </span>

            </h2>


            <p
              className="
                text-xs
                sm:text-sm
                text-slate-500
                mt-1.5
              "
            >
              Pick one technology per category to build
              your ideal stack.
            </p>

          </div>



          {/* ==================================================
              LOADING / ERROR / DATA
          ================================================== */}

          {isLoading ? (

            // ------------------------------------------------
            // 1. Loading State
            // ------------------------------------------------

            <div
              id="loading-spinner-view"
              className="
                py-24
                flex
                flex-col
                items-center
                justify-center
                space-y-3
                bg-white
                rounded-2xl
                border border-slate-100
                shadow-sm
              "
            >

              <Loader2
                className="
                  w-8
                  h-8
                  text-rose-500
                  animate-spin
                "
              />


              <p
                className="
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                Loading Technologies...
              </p>

            </div>


          ) : loadError ? (

            // ------------------------------------------------
            // 2. Error State
            // ------------------------------------------------

            <div
              className="
                p-8
                bg-rose-50
                border border-rose-200
                rounded-2xl
                text-center
                space-y-3
              "
            >

              <p
                className="
                  text-rose-700
                  font-bold
                "
              >
                {loadError}
              </p>


              <button
                type="button"
                onClick={() => window.location.reload()}
                className="
                  px-4
                  py-2
                  bg-rose-600
                  text-white
                  rounded-xl
                  text-xs
                  font-semibold
                "
              >
                Retry Loading
              </button>

            </div>


          ) : (

            // ------------------------------------------------
            // 3. Successfully Loaded
            // ------------------------------------------------

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-4
                gap-6
                items-start
              "
            >


              {/* ==================================================
                  TECHNOLOGY CARDS
              ================================================== */}

              <div className="lg:col-span-3">

                <div
                  id="technologies-grid"
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                  "
                >

                  {technologies.map((tech) => {


                    // Technology already selected কিনা
                    const isAdded = stack.some(
                      (item) => item.id === tech.id
                    );


                    return (

                      <TechCard
                        key={tech.id}
                        technology={tech}
                        isAdded={isAdded}
                        onAddToStack={handleAddToStack}
                      />

                    );

                  })}

                </div>

              </div>



              {/* ==================================================
                  STACK SIDEBAR
              ================================================== */}

              <div
                id="stack-sidebar-container"
                className="lg:col-span-1"
              >

                <StackSidebar
                  stack={stack}
                  onRemoveItem={handleRemoveItem}
                  onRemoveAll={handleRemoveAll}
                />

              </div>

            </div>

          )}

        </section>

      </main>



      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer />

    </div>

  );
}