import React, { useEffect, useRef, useState } from 'react';

const CardStack: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const images = [
    "/Vanillite.png",
    "/Orannite.png",
    "/Chocollite.png",
  ];

  useEffect(() => {
    const main = mainRef.current;

    const handleScroll = () => {
      if (main) {
        const containerWidth = main.getBoundingClientRect().width;
        const scrollLeft = (activeIndex * containerWidth) % (containerWidth * images.length);
        main.dataset.activeIndex = activeIndex.toString();
      }
    };

    const autoScroll = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const warn = () => {
      const warning = document.querySelector('.warning');
      warning?.classList.add('show');
      setTimeout(() => warning?.classList.remove('show'), 3000);
    };

    main?.addEventListener('mousedown', warn);

    // Set interval to change the image every 3 seconds
    intervalRef.current = window.setInterval(autoScroll, 3000);

    return () => {
      main?.removeEventListener('mousedown', warn);
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, images.length]);

  return (
    <main
      ref={mainRef}
      data-active-index="0"
      data-debug="false"
      className="relative w-[800px] h-[600px] perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <style>{`
        :root {
          --dim-card-width: 500px;
          --dim-card-height: 600px;
          --dim-card-border-radius: 16px;
          --box-shadow-card: 0 1px 12px rgba(0, 0, 0, 0.4);
        }

        .card-stack {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          transform-style: preserve-3d;
          pointer-events: none;
        }

        .card {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          width: var(--dim-card-width);
          height: var(--dim-card-height);
          border-radius: var(--dim-card-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: var(--box-shadow-card);
        }

        .card img {
          position: absolute;
          object-fit: cover;
          width: 100%;
          z-index: 1;
          height: 100%;
        }

        .warning {
          position: absolute;
          bottom: 24px;
          left: 0;
          right: 0;
          text-align: center;
          white-space: nowrap;
          opacity: 0;
          transition: 300ms opacity;
        }

        .warning.show {
          opacity: 1;
        }
      `}</style>

      {/* Card Stack */}
      <div className="card-stack">
        {images.map((src, i) => (
          <div
            key={i}
            className={`card ${i === activeIndex ? 'visible' : 'hidden'}`}
            style={{ visibility: i === activeIndex ? 'visible' : 'hidden' }}
          >
            <img src={src} alt={`Card ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Warning Message */}
      <div className="warning">
        <span>Mouse drag not supported. Use responsive mode or a touch pad to scroll.</span>
      </div>
    </main>
  );
};

export default CardStack;
