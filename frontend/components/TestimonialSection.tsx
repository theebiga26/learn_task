"use client";

import React, { useState, useCallback, useEffect } from 'react';

// --- TYPES ---
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

interface TestimonialSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
}

// --- TESTIMONIAL SECTION COMPONENT ---
export const TestimonialSection = React.forwardRef<HTMLDivElement, TestimonialSectionProps>(
  ({ title, subtitle, testimonials, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(Math.floor(testimonials.length / 2));

    const handleNext = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, [testimonials.length]);

    const handlePrev = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    useEffect(() => {
      const timer = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(timer);
    }, [handleNext]);

    const cn = (...classes: (string | boolean | undefined)[]) => {
      return classes.filter(Boolean).join(' ');
    };

    return (
      <section
        ref={ref}
        className={cn(
          'testimonial-section relative w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-background text-slate-900 py-20 px-4',
          className
        )}
        {...props}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(128,90,213,0.3),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,123,255,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* Content */}
        <div className="z-10 flex w-full flex-col items-center text-center space-y-8 md:space-y-12">
          {/* Header Section */}
          <div className="space-y-4">
            {title && (
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter max-w-4xl text-slate-900">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="max-w-2xl mx-auto text-slate-700 md:text-xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Testimonials Carousel */}
          <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
            {/* Carousel Wrapper */}
            <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
              {testimonials.map((testimonial, index) => {
                const offset = index - currentIndex;
                const total = testimonials.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    className={cn(
                      'absolute w-80 md:w-96 transition-all duration-500 ease-in-out',
                      'flex flex-col items-center justify-center p-6'
                    )}
                    style={{
                      transform: `
                        translateX(${pos * 45}%)
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${pos * -10}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                      filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                      visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                    }}
                  >
                    <div className="card-glass rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center space-y-4">
                      {/* Quote */}
                      <p className="text-lg md:text-xl text-center text-slate-800 leading-relaxed flex-grow">
                        {testimonial.quote}
                      </p>

                      {/* Author Info */}
                      <div className="flex flex-col items-center space-y-2 pt-4">
                        {testimonial.avatar && (
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-16 h-16 rounded-full border-2 border-sky-blue/30 object-cover"
                          />
                        )}
                        <div className="text-center">
                          <p className="font-semibold text-slate-900">{testimonial.author}</p>
                          <p className="text-sm text-slate-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-background/50 backdrop-blur-sm border border-sky-blue/30 text-sky-blue hover:bg-sky-blue/10 transition flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-background/50 backdrop-blur-sm border border-sky-blue/30 text-sky-blue hover:bg-sky-blue/10 transition flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'w-8 bg-sky-blue'
                    : 'w-2 bg-pale-blue/30 hover:bg-pale-blue/50'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TestimonialSection.displayName = 'TestimonialSection';
