import React, { useEffect, useState } from 'react';

const SLATS = 12;

const ShutterOverlay = ({ onComplete }) => {
  const [openedSlats, setOpenedSlats] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Open slats one by one from top to bottom with staggered delay
    const timers = [];
    for (let i = 0; i < SLATS; i++) {
      const t = setTimeout(() => {
        setOpenedSlats(prev => [...prev, i]);
      }, i * 120);
      timers.push(t);
    }

    // After all slats open, hide overlay
    const finishTimer = setTimeout(() => {
      setDone(true);
      if (onComplete) onComplete();
    }, SLATS * 120 + 400);
    timers.push(finishTimer);

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {Array.from({ length: SLATS }).map((_, i) => (
        <div
          key={i}
          className="w-full overflow-hidden"
          style={{ height: `${100 / SLATS}vh` }}
        >
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#112925',
              transformOrigin: 'top',
              transform: openedSlats.includes(i) ? 'scaleY(0)' : 'scaleY(1)',
              transition: openedSlats.includes(i)
                ? 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                : 'none',
              // Shutter slat look: subtle horizontal lines
              backgroundImage:
                'repeating-linear-gradient(to bottom, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 8px)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ShutterOverlay;

