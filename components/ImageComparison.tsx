'use client';

import { useEffect, useRef } from 'react';

const ImageComparison = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current || !sliderRef.current) return;

    const container = containerRef.current;
    const overlay = overlayRef.current;
    const slider = sliderRef.current;

    const updateSliderPosition = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) return;

      const containerRect = container.getBoundingClientRect();
      let pos = getCursorPos(e, containerRect);

      if (pos < 0) pos = 0;
      if (pos > containerRect.width) pos = containerRect.width;

      overlay.style.width = `${pos}px`;
      slider.style.left = `${pos - slider.offsetWidth / 2}px`;
    };

    const getCursorPos = (e: MouseEvent | TouchEvent, containerRect: DOMRect) => {
      let x = 0;
      let event = 'touches' in e ? e.touches[0] : e;
      x = event.clientX - containerRect.left;
      return x;
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

    return () => {
      slider.removeEventListener('mousedown', startDragging);
      slider.removeEventListener('touchstart', startDragging);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Check Out Our Two Design Draft Wireframes!</h1>
      <p className="mb-4 text-2xl">
        Click and drag the blue slider to compare the <b>Organization Flow</b> and <b>Employer Flow:</b>
      </p>

      <div ref={containerRef} className="relative w-[800px] h-[900px] border border-gray-300 shadow-lg overflow-hidden">
        <div className="absolute inset-0">
          <object
            data="/ReachOut-Employer.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            <p>Your browser does not support PDFs. <a href="/ReachOut-Employer.pdf">Download Employer Flow</a></p>
          </object>
        </div>

        <div ref={overlayRef} className="absolute inset-0 w-1/2 overflow-hidden">
          <object
            data="/ReachOut-Organization.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            <p>Your browser does not support PDFs. <a href="/ReachOut-Organization.pdf">Download Organization Flow</a></p>
          </object>
        </div>

        <div
          ref={sliderRef}
          className="absolute top-0 bottom-0 w-2 bg-blue-500 opacity-80 cursor-ew-resize z-10"
          style={{ left: '50%' }}
        ></div>
      </div>
    </div>
  );
};

export default ImageComparison;
