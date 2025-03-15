'use client';

import { useEffect, useRef } from 'react';

const ImageComparison = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current || !sliderRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const overlay = overlayRef.current;
    const slider = sliderRef.current;

    // Initial position for the slider and overlay width
    let initialWidth = containerWidth / 2;
    overlay.style.width = `${initialWidth}px`;
    slider.style.left = `${initialWidth - slider.offsetWidth / 2}px`;

    const updateSliderPosition = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) return;

      let pos = getCursorPos(e);
      if (pos < 0) pos = 0;
      if (pos > containerWidth) pos = containerWidth;

      overlay.style.width = `${pos}px`;
      slider.style.left = `${pos - slider.offsetWidth / 2}px`;
    };

    const getCursorPos = (e: MouseEvent | TouchEvent) => {
      let rect = container.getBoundingClientRect();
      let event = 'touches' in e ? e.touches[0] : e;
      return event.pageX - rect.left;
    };

    const startDragging = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;
      document.addEventListener('mousemove', updateSliderPosition);
      document.addEventListener('mouseup', stopDragging);
      document.addEventListener('touchmove', updateSliderPosition);
      document.addEventListener('touchend', stopDragging);
    };

    const stopDragging = () => {
      isDraggingRef.current = false;
      document.removeEventListener('mousemove', updateSliderPosition);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchmove', updateSliderPosition);
      document.removeEventListener('touchend', stopDragging);
    };

    slider.addEventListener('mousedown', startDragging);
    slider.addEventListener('touchstart', startDragging);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Compare ReachOut Employer & Organization PDFs</h1>
      <p className="mb-4">Drag the slider to compare the two documents:</p>
      <div ref={containerRef} className="relative w-[600px] h-[800px] border">
        {/* Base PDF */}
        <iframe
          src="/ReachOut-Organization.pdf"
          className="absolute inset-0 w-full h-full"
        />
        {/* Overlay PDF */}
        <div
          ref={overlayRef}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <iframe
            src="/ReachOut-Employer.pdf"
            className="w-full h-full"
          />
        </div>
        {/* Slider */}
        <div
          ref={sliderRef}
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-green-400 opacity-70 rounded-full cursor-ew-resize z-10"
          style={{ left: `50%` }}
        ></div>
      </div>
    </div>
  );
};

export default ImageComparison;
