/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Poster {
  id: string;
  title: string;
  image: string;
  date: string;
}

interface PostersPopupProps {
  isOpen: boolean;
  onClose: () => void;
  posters?: Poster[];
  autoPlayInterval?: number; // ms, default 4000
}

const PostersPopup: React.FC<PostersPopupProps> = ({
  isOpen,
  onClose,
  posters = [
    {
      id: "1",
      title: "Tuition",
      image: "/ao4.png",
      date: "March 28, 2024",
    },
    {
      id: "2",
      title: "Vacation Courses",
      image: "/poster.jpeg",
      date: "March 25, 2024",
    },
  ],
  autoPlayInterval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setCurrentIndex(0);
    setProgress(0);
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isOpen || isPaused || posters.length <= 1) return;

    setProgress(0);

    // Progress bar ticker (updates every 50ms)
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (50 / autoPlayInterval) * 100, 100));
    }, 50);

    // Slide advance
    intervalRef.current = setTimeout(() => {
      advanceTo("right", (currentIndex + 1) % posters.length);
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex, isPaused, posters.length, autoPlayInterval]);

  const advanceTo = (dir: "left" | "right", index: number) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 380);
  };

  const handleNext = () => advanceTo("right", (currentIndex + 1) % posters.length);
  const handlePrev = () => advanceTo("left", (currentIndex - 1 + posters.length) % posters.length);
  const handleDot = (idx: number) => advanceTo(idx > currentIndex ? "right" : "left", idx);

  const currentPoster = posters[currentIndex];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 backdrop-overlay" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-wrapper">
        <div
          className="relative w-full max-w-xs overflow-hidden rounded-3xl shadow-poster modal-card"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Full Bleed Image */}
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-black">
            {/* Blurred BG layer */}
            <img
              src={currentPoster.image}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-30"
            />

            {/* Main Image */}
            <img
              src={currentPoster.image}
              alt={currentPoster.title}
              className={`absolute inset-0 w-full h-full object-cover poster-img ${
                isAnimating
                  ? direction === "right" ? "slide-out-left" : "slide-out-right"
                  : "slide-in"
              }`}
            />

            {/* Top gradient */}
            <div className="absolute inset-x-0 top-0 h-24 top-fade z-10" />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-52 bottom-fade z-10" />

            {/* Story-style progress bars */}
            {posters.length > 1 && (
              <div className="absolute top-0 inset-x-0 z-30 flex gap-1 px-3 pt-2.5">
                {posters.map((_, idx) => (
                  <div
                    key={idx}
                    className="flex-1 h-0.5 rounded-full overflow-hidden bg-white/25"
                  >
                    <div
                      className="h-full bg-white rounded-full"
                      style={{
                        width:
                          idx < currentIndex
                            ? "100%"
                            : idx === currentIndex
                            ? `${progress}%`
                            : "0%",
                        transition: idx === currentIndex ? "none" : "width 0.3s ease",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Close Button — small */}
            <button
              onClick={onClose}
              className="absolute top-6 right-3 z-20 glass-btn p-1.5 rounded-full"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Prev / Next arrows — small */}
            {posters.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  disabled={isAnimating}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 glass-btn p-1.5 rounded-full disabled:opacity-30"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={isAnimating}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 glass-btn p-1.5 rounded-full disabled:opacity-30"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </>
            )}

            {/* Bottom overlay — title, date, actions */}
            <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 pt-12">
              {/* Dot indicators */}
              {posters.length > 1 && (
                <div className="flex gap-1 mb-2.5">
                  {posters.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDot(idx)}
                      className={`h-0.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "bg-white w-5"
                          : "bg-white/40 w-1.5 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              )}

              <p className="text-white/55 text-[10px] font-medium tracking-widest uppercase mb-0.5">
                {currentPoster.date}
              </p>
              <h2 className="text-white text-base font-bold leading-snug mb-3 drop-shadow-sm">
                {currentPoster.title}
              </h2>

              {/* Action Buttons — compact */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 bg-white text-gray-900 font-semibold text-xs py-2.5 rounded-lg hover:bg-white/90 active:scale-95 transition-all duration-150">
                  <ExternalLink className="w-3 h-3" />
                  Learn More
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 glass-btn text-white font-semibold text-xs py-2.5 rounded-lg active:scale-95 transition-all duration-150"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .backdrop-overlay {
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          animation: fadeIn 0.25s ease-out;
        }
        .modal-wrapper {
          animation: fadeIn 0.25s ease-out;
        }
        .modal-card {
          animation: scaleUp 0.32s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .shadow-poster {
          box-shadow: 0 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.07);
        }
        .top-fade {
          background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%);
        }
        .bottom-fade {
          background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, transparent 100%);
        }
        .glass-btn {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px) saturate(160%);
          -webkit-backdrop-filter: blur(10px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.2);
          transition: background 0.2s, transform 0.15s;
        }
        .glass-btn:hover { background: rgba(255,255,255,0.26); }
        .glass-btn:active { transform: scale(0.92); }

        .poster-img { transition: opacity 0.38s ease, transform 0.38s ease; }
        .slide-in { opacity: 1; transform: translateX(0) scale(1); }
        .slide-out-left { opacity: 0; transform: translateX(-7%) scale(0.97); }
        .slide-out-right { opacity: 0; transform: translateX(7%) scale(0.97); }

        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9) translateY(14px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
};

export default PostersPopup;