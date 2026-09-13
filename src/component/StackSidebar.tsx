import React from 'react';
import { X } from 'lucide-react';
import { StackItem } from '../types';


// StackSidebar এর Props
interface StackSidebarProps {

  // User যেসব technology select করেছে
  stack: StackItem[];

  // একটি technology remove করার function
  onRemoveItem: (id: string) => void;

  // সব technology একসাথে remove করার function
  onRemoveAll: () => void;
}


// Stack Sidebar Component
export const StackSidebar: React.FC<StackSidebarProps> = ({
  stack,
  onRemoveItem,
  onRemoveAll,
}) => {

  // মোট কয়টি technology selected আছে
  const selectedCount = stack.length;


  return (
    <aside
      id="your-stack-panel"
      className="
        bg-white
        rounded-3xl
        border border-slate-100
        shadow-sm
        p-6
        sticky
        top-24
      "
    >


      {/* ==================================================
          HEADER
      ================================================== */}

      <div>

        <h2
          className="
            text-xl
            font-bold
            text-slate-900
            tracking-tight
          "
        >
          Your Stack
        </h2>


        <p
          className="
            text-sm
            text-slate-400
            font-normal
            mt-1
            mb-5
          "
        >
          {selectedCount === 0
            ? 'No technologies selected yet.'
            : `${selectedCount} Technology Selected`}
        </p>

      </div>



      {/* ==================================================
          STACK CONTENT
      ================================================== */}

      <div>

        {selectedCount === 0 ? (

          // যদি কোনো technology select করা না থাকে
          <div
            id="empty-stack-view"
            className="
              border
              border-dashed
              border-slate-200/90
              rounded-2xl
              py-10
              px-4
              text-center
              bg-white
              flex
              items-center
              justify-center
            "
          >

            <p
              className="
                text-sm
                text-slate-400
                font-normal
              "
            >
              Your stack is empty.
            </p>

          </div>

        ) : (

          // যদি technology select করা থাকে
          <div>


            {/* ==================================================
                SELECTED TECHNOLOGIES LIST
            ================================================== */}

            <div
              id="stack-items-list"
              className="
                space-y-3
                max-h-[480px]
                overflow-y-auto
                pr-0.5
              "
            >

              {stack.map((item) => (

                <div
                  key={item.id}
                  id={`stack-item-${item.id}`}
                  className="
                    bg-white
                    rounded-2xl
                    border border-slate-200/80
                    p-3.5
                    flex
                    items-center
                    justify-between
                    shadow-2xs
                    hover:border-slate-300
                    transition-colors
                  "
                >


                  {/* ==================================================
                      LEFT SIDE
                      Icon + Name + Category
                  ================================================== */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      min-w-0
                    "
                  >

                    {/* Technology Icon */}

                    <div
                      className="
                        w-9 h-9
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >

                      <img
                        src={item.icon}
                        alt={item.name}
                        className="
                          w-8 h-8
                          object-contain
                        "
                        loading="lazy"
                        referrerPolicy="no-referrer"

                        // Image load না হলে image hide হবে
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                        }}
                      />

                    </div>


                    {/* Technology Name + Category */}

                    <div className="min-w-0">

                      <h4
                        className="
                          text-sm
                          font-bold
                          text-slate-900
                          truncate
                          leading-tight
                        "
                      >
                        {item.name}
                      </h4>


                      <span
                        className="
                          text-xs
                          text-slate-400
                          block
                          mt-0.5
                        "
                      >
                        {item.category}
                      </span>

                    </div>

                  </div>



                  {/* ==================================================
                      REMOVE SINGLE ITEM BUTTON
                  ================================================== */}

                  <button
                    id={`remove-item-btn-${item.id}`}
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="
                      text-slate-400
                      hover:text-slate-600
                      p-1.5
                      transition-colors
                      rounded-md
                      hover:bg-slate-50
                      shrink-0
                      ml-2
                    "
                    aria-label={`Remove ${item.name}`}
                  >

                    <X
                      className="
                        w-5 h-5
                        stroke-[1.75]
                      "
                    />

                  </button>

                </div>

              ))}

            </div>



            {/* ==================================================
                REMOVE ALL BUTTON
            ================================================== */}

            <button
              id="remove-all-btn"
              type="button"
              onClick={onRemoveAll}
              className="
                w-full
                mt-6
                py-2.5
                px-4
                rounded-xl
                border border-rose-300
                hover:border-rose-400
                bg-white
                hover:bg-rose-50
                text-[#e11d48]
                font-bold
                text-base
                transition-colors
                text-center
              "
            >
              Remove All
            </button>

          </div>

        )}

      </div>

    </aside>
  );
};