import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Technology } from '../types';

// One card that shows a single technology (React, Docker, etc.)
interface TechCardProps {
  technology: Technology; // the data to display on this card
  isAdded: boolean; // true if this technology is already in the user's stack
  onAddToStack: (tech: Technology) => void; // called when the "Add to Stack" button is clicked
}

export const TechCard: React.FC<TechCardProps> = ({
  technology,
  isAdded,
  onAddToStack,
}) => {
  // If the icon image URL fails to load, we show the first 2 letters of the
  // name instead (see the `imageError ? ... : ...` check below).
  const [imageError, setImageError] = useState(false);

  return (
    <div
      id={`tech-card-${technology.id}`}
      className={`bg-white rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between ${isAdded
          ? 'border-2 border-[#ec4899] shadow-sm hover:shadow-lg'
          : 'border-2 border-slate-100 hover:shadow-lg hover:-translate-y-1.5'
        }`}
    >
      {/* Top Header: Tech Icon & Badge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 flex items-center justify-center">
            {!imageError ? (
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="w-9 h-9 object-contain"
                onError={() => setImageError(true)}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              // Fallback shown only if the icon image above fails to load
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                {technology.name.slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>

          {/* Badge is optional, so only render it if the JSON data has one */}
          {technology.badge ? (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#fdf2f8] text-[#db2777]">
              {technology.badge}
            </span>
          ) : (
            <div className="h-6" />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
          {technology.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed min-h-[48px] mb-6">
          {technology.description}
        </p>
      </div>

      {/* Meta Row & Action Button */}
      <div>
        <div className="flex items-center justify-between text-xs mb-4">
          {/* Category */}
          <span className="bg-slate-100/90 text-slate-700 text-xs px-3 py-1.5 rounded-lg font-medium">
            {technology.category}
          </span>

          {/* Difficulty */}
          <span className="text-slate-500 text-xs font-medium">
            {technology.difficulty}
          </span>

          {/* Rating (always shown with 1 decimal place, e.g. 4.9) */}
          <span className="text-slate-800 text-xs font-bold flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{technology.rating.toFixed(1)}</span>
          </span>
        </div>

        {/* Action Button: looks/behaves disabled once already added */}
        <button
          id={`add-btn-${technology.id}`}
          type="button"
          aria-disabled={isAdded}
          onClick={(e) => {
            e.stopPropagation();
            onAddToStack(technology);
          }}
          className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${isAdded
              ? 'bg-[#fdf2f8] text-[#db2777] cursor-not-allowed'
              : 'bg-brand-gradient text-white hover:opacity-90 active:scale-[0.99] cursor-pointer'
            }`}
        >
          <span>{isAdded ? '✓ Added to Stack' : 'Add to Stack'}</span>
        </button>
      </div>
    </div>
  );
};
