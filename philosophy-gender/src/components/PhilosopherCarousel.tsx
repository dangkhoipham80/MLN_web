"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

interface Philosopher {
  name: string;
  era: string;
  description: string;
  image: string;
  quote: string;
}

interface PhilosopherCarouselProps {
  readonly philosophers: Philosopher[];
}

export default function PhilosopherCarousel({
  philosophers,
}: PhilosopherCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getRotateY = () => {
    if (!isTransitioning) return 0;
    return currentIndex % 2 === 0 ? 1 : -1;
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? philosophers.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === philosophers.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isTransitioning]);

  // Touch handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* 3D Timeline Container with Perspective */}
      <section
        className="relative w-full h-full overflow-hidden"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-label="Philosopher timeline carousel"
      >
        {/* 3D Stage with Camera Movement */}
        <motion.div
          className="relative w-full h-full"
          animate={{
            rotateY: getRotateY(),
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Timeline Track */}
          <motion.div
            className="flex h-full"
            animate={{
              x: `-${currentIndex * 100}%`,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {philosophers.map((philosopher, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === philosophers.length - 1);
              const isNext =
                index === currentIndex + 1 ||
                (currentIndex === philosophers.length - 1 && index === 0);

              const getTimelineRotateY = () => {
                if (isActive) return 0;
                if (isPrev) return 2;
                if (isNext) return -2;
                return 0;
              };

              return (
                <div
                  key={philosopher.name}
                  className="w-full h-full flex-shrink-0 flex items-center justify-center px-8"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Back Layer - Parchment Fibers */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='fibers' patternUnits='userSpaceOnUse' width='200' height='200'%3E%3Crect width='200' height='200' fill='transparent'/%3E%3Cpath d='M0,100 Q50,80 100,100 T200,100' stroke='%23C78B4E' stroke-width='0.5' fill='none' opacity='0.1'/%3E%3Cpath d='M0,120 Q50,100 100,120 T200,120' stroke='%23C78B4E' stroke-width='0.3' fill='none' opacity='0.08'/%3E%3Cpath d='M0,80 Q50,60 100,80 T200,80' stroke='%23C78B4E' stroke-width='0.3' fill='none' opacity='0.08'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23fibers)'/%3E%3C/svg%3E")`,
                      filter: "blur(3px)",
                      transform: `translateZ(-10px)`,
                    }}
                    animate={{
                      opacity: isActive ? 0.15 : 0.05,
                      scale: isActive ? 1.02 : 0.98,
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />

                  {/* Timeline Layer - Ink Path */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      transform: `translateZ(-2px)`,
                    }}
                  >
                    {/* Curved Timeline Path */}
                    <motion.div
                      className="relative w-full h-1"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, #7A6A53 20%, #C78B4E 50%, #7A6A53 80%, transparent 100%)`,
                        borderRadius: "2px",
                        boxShadow:
                          "0 2px 8px rgba(122, 106, 83, 0.3), inset 0 1px 2px rgba(199, 139, 78, 0.2)",
                      }}
                      animate={{
                        rotateY: getTimelineRotateY(),
                        scaleY: isActive ? 1.2 : 0.8,
                      }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />

                    {/* Timeline Tick Marks */}
                    <div className="absolute inset-0 flex justify-between items-center px-16">
                      {philosophers.map((_, tickIndex) => {
                        const isCurrentTick = tickIndex === index;
                        const getTickOpacity = () => {
                          if (!isActive) return 0.3;
                          return isCurrentTick ? 1 : 0.6;
                        };

                        return (
                          <motion.div
                            key={`tick-${
                              philosophers[tickIndex]?.name || tickIndex
                            }`}
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: isCurrentTick
                                ? "#C78B4E"
                                : "#7A6A53",
                              boxShadow: isCurrentTick
                                ? "0 0 8px rgba(199, 139, 78, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)"
                                : "0 2px 4px rgba(122, 106, 83, 0.2)",
                            }}
                            animate={{
                              scale: isCurrentTick ? 1.5 : 1,
                              opacity: getTickOpacity(),
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                          />
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Content Layer */}
                  <motion.div
                    className="relative max-w-4xl w-full"
                    style={{
                      transform: `translateZ(${isActive ? 8 : 0}px)`,
                    }}
                    animate={{
                      opacity: isActive ? 1 : 0.7,
                      scale: isActive ? 1 : 0.95,
                      filter: isActive ? "blur(0px)" : "blur(1px)",
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    {/* Scroll-style container */}
                    <div
                      className="relative p-12 rounded-lg shadow-lg"
                      style={{
                        backgroundColor: "#F4EFE6",
                        border: "2px solid #7A6A53",
                        boxShadow: `
                          0 0 0 1px rgba(199, 139, 78, 0.2),
                          0 ${isActive ? 30 : 15}px ${
                          isActive ? 60 : 30
                        }px rgba(122, 106, 83, ${isActive ? 0.25 : 0.15}),
                          inset 0 1px 0 rgba(255, 255, 255, 0.1)
                        `,
                        transform: `perspective(1000px) rotateX(${
                          isActive ? 1 : 0
                        }deg)`,
                      }}
                    >
                      {/* Scroll edge decorations */}
                      <div
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded-full"
                        style={{ backgroundColor: "#7A6A53" }}
                      />
                      <div
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded-full"
                        style={{ backgroundColor: "#7A6A53" }}
                      />

                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Avatar with 3D Seal Effect */}
                        <motion.div
                          className="flex-shrink-0"
                          animate={{
                            translateZ: isActive ? 12 : 0,
                            rotateX: isActive ? 2 : 0,
                            rotateY: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                          <div
                            className="w-32 h-32 rounded-full overflow-hidden shadow-lg relative group"
                            style={{
                              border: "4px solid #7A6A53",
                              boxShadow: isActive
                                ? "0 8px 24px rgba(122, 106, 83, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)"
                                : "0 4px 12px rgba(122, 106, 83, 0.2)",
                            }}
                          >
                            <img
                              src={philosopher.image}
                              alt={philosopher.name}
                              className="w-full h-full object-cover"
                            />
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute inset-0"
                              style={{
                                backgroundColor: "rgba(199, 139, 78, 0.2)",
                              }}
                            />
                          </div>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                          {/* Name */}
                          <motion.h2
                            className="text-4xl lg:text-5xl font-bold mb-4"
                            style={{
                              color: "#3B3A36",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                              textShadow: "0 2px 4px rgba(59, 58, 54, 0.1)",
                            }}
                            animate={{
                              translateZ: isActive ? 6 : 0,
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                          >
                            {philosopher.name}
                          </motion.h2>

                          {/* Era Badge with 3D Embossed Effect */}
                          <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                            style={{
                              backgroundColor: "#C78B4E",
                              boxShadow: isActive
                                ? "0 6px 16px rgba(199, 139, 78, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1)"
                                : "0 4px 8px rgba(199, 139, 78, 0.3)",
                            }}
                            animate={{
                              translateZ: isActive ? 8 : 0,
                              rotateX: isActive ? 1 : 0,
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                          >
                            <Clock
                              className="w-4 h-4"
                              style={{ color: "#F4EFE6" }}
                            />
                            <span
                              className="text-lg font-medium"
                              style={{
                                color: "#F4EFE6",
                                fontFamily:
                                  "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                                textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                              }}
                            >
                              {philosopher.era}
                            </span>
                          </motion.div>

                          {/* Description */}
                          <motion.p
                            className="text-xl leading-relaxed mb-8"
                            style={{
                              color: "#3B3A36",
                              fontFamily:
                                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                            }}
                            animate={{
                              translateZ: isActive ? 4 : 0,
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                          >
                            {philosopher.description}
                          </motion.p>

                          {/* Quote with 3D Depth */}
                          <motion.div
                            className="p-6 rounded-r-lg relative"
                            style={{
                              backgroundColor: "rgba(244, 239, 230, 0.8)",
                              borderLeft: "6px solid #C78B4E",
                              boxShadow: isActive
                                ? "inset 4px 0 8px rgba(199, 139, 78, 0.1), 0 4px 12px rgba(122, 106, 83, 0.2)"
                                : "inset 4px 0 8px rgba(199, 139, 78, 0.1)",
                            }}
                            animate={{
                              translateZ: isActive ? 6 : 0,
                              rotateY: isActive ? 1 : 0,
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                          >
                            {/* Quote decoration */}
                            <div
                              className="absolute top-4 left-4 w-3 h-3 rounded-full opacity-30"
                              style={{ backgroundColor: "#C78B4E" }}
                            />
                            <p
                              className="italic text-lg pl-6"
                              style={{
                                color: "#3B3A36",
                                fontFamily:
                                  "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                                textShadow: "0 1px 2px rgba(59, 58, 54, 0.05)",
                              }}
                            >
                              "{philosopher.quote}"
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <motion.button
          onClick={goToPrevious}
          disabled={isTransitioning}
          aria-label="Previous philosopher"
          className="p-3 rounded-full shadow-lg backdrop-blur-xl border transition-all duration-300"
          style={{
            backgroundColor: "rgba(244, 239, 230, 0.9)",
            border: "2px solid #7A6A53",
            boxShadow: "0 8px 16px rgba(122, 106, 83, 0.2)",
          }}
          whileHover={{ scale: 1.05, translateZ: 4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-6 h-6" style={{ color: "#C78B4E" }} />
        </motion.button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <motion.button
          onClick={goToNext}
          disabled={isTransitioning}
          aria-label="Next philosopher"
          className="p-3 rounded-full shadow-lg backdrop-blur-xl border transition-all duration-300"
          style={{
            backgroundColor: "rgba(244, 239, 230, 0.9)",
            border: "2px solid #7A6A53",
            boxShadow: "0 8px 16px rgba(122, 106, 83, 0.2)",
          }}
          whileHover={{ scale: 1.05, translateZ: 4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-6 h-6" style={{ color: "#C78B4E" }} />
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {philosophers.map((philosopher, index) => (
            <motion.button
              key={`dot-${philosopher.name}`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              aria-label={`Go to philosopher ${index + 1}`}
              className="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                backgroundColor: index === currentIndex ? "#C78B4E" : "#7A6A53",
                boxShadow:
                  index === currentIndex
                    ? "0 0 8px rgba(199, 139, 78, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)"
                    : "0 2px 4px rgba(122, 106, 83, 0.2)",
              }}
              whileHover={{ scale: 1.2, translateZ: 2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="px-6 py-3 rounded-full backdrop-blur-xl border shadow-lg"
          style={{
            backgroundColor: "rgba(244, 239, 230, 0.9)",
            border: "2px solid #7A6A53",
            boxShadow: "0 8px 16px rgba(122, 106, 83, 0.2)",
          }}
        >
          <span
            className="text-sm font-medium"
            style={{
              color: "#3B3A36",
              fontFamily:
                "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
            }}
          >
            Swipe • Click • Arrow Keys
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
