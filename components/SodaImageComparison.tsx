'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const SodaImageComparison = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRefs = useRef<HTMLDivElement[]>([]);
  const sliderRefs = useRef<HTMLDivElement[]>([]);
  const isDraggingRef = useRef<boolean[]>([]);

  useEffect(() => {
    if (!containerRef.current || overlayRefs.current.length === 0 || sliderRefs.current.length === 0) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;

    overlayRefs.current.forEach((overlay, index) => {
      const slider = sliderRefs.current[index];
      if (!overlay || !slider) return;

      let initialWidth = index === 0 ? containerWidth / 3 : (2 * containerWidth) / 3;
      overlay.style.width = `${initialWidth}px`;
      slider.style.left = `${initialWidth - slider.offsetWidth / 2}px`;

      const updateSliderPosition = (e: MouseEvent | TouchEvent) => {
        if (!isDraggingRef.current[index]) return;

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
        isDraggingRef.current[index] = true;
        document.addEventListener('mousemove', updateSliderPosition);
        document.addEventListener('mouseup', stopDragging);
        document.addEventListener('touchmove', updateSliderPosition);
        document.addEventListener('touchend', stopDragging);
      };

      const stopDragging = () => {
        isDraggingRef.current[index] = false;
        document.removeEventListener('mousemove', updateSliderPosition);
        document.removeEventListener('mouseup', stopDragging);
        document.removeEventListener('touchmove', updateSliderPosition);
        document.removeEventListener('touchend', stopDragging);
      };

      slider.addEventListener('mousedown', startDragging);
      slider.addEventListener('touchstart', startDragging);
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">View The Flavors and their designs!</h1>
      <p className="mb-4">Click and slide the blue sliders to compare three images:</p>
      <div ref={containerRef} className="relative w-[600px] h-[800px]">
        <div className="absolute inset-0">
          <Image src="/Vanillite.png" alt="Snow" layout="fill" objectFit="cover" />
        </div>
        {["/Chocollite.png", "/Orannite.png"].map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) overlayRefs.current[index] = el;
            }}
            className="absolute inset-0 w-1/2 overflow-hidden"
          >
            <Image src={src} alt={`Comparison ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
        {[0, 1].map((index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sliderRefs.current[index] = el;
            }}
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-200 opacity-70 rounded-full cursor-ew-resize z-10"
            style={{ left: `${(index + 1) * 33}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SodaImageComparison;
