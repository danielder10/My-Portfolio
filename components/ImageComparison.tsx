'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

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

      const containerWidth = container.offsetWidth;
      let pos = getCursorPos(e);
      
      // Ensure the slider stays within bounds
      if (pos < 0) pos = 0;
      if (pos > containerWidth) pos = containerWidth;

      overlay.style.width = `${pos}px`;
      slider.style.left = `${pos - slider.offsetWidth / 2}px`;
    };

    const getCursorPos = (e: MouseEvent | TouchEvent) => {
      let x = 0;
      let rect = container.getBoundingClientRect();
      let event = 'touches' in e ? e.touches[0] : e;
      x = event.pageX - rect.left;
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
      <p className="mb-4 text-2xl">Click and slide the blue slider to View the <b>Organization Flow</b> and <b>Employer Flow:</b></p>
      <div ref={containerRef} className="relative w-[800px] h-[900px]">
        <div className="absolute inset-0">
          <Image src="/Mockup.png" alt="Snow" layout="fill" objectFit="cover" />
        </div>
        <div ref={overlayRef} className="absolute inset-0 w-1/2 overflow-hidden">
          <Image src="/Mockup2.png" alt="Forest" layout="fill" objectFit="cover" />
        </div>
        <div
          ref={sliderRef}
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 opacity-70 rounded-full cursor-ew-resize z-10"
          style={{ left: '50%' }}
        ></div>
      </div>
    </div>
  );
};

export default ImageComparison;
