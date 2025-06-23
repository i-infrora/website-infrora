import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

// Infinity SVG component with animated dots
const InfinityLoader = () => (
  <svg
    width="420"
    height="180"
    viewBox="0 0 420 180"
    fill="none"
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    style={{ zIndex: 1 }}
  >
    {/* Infinity path */}
    <path
      d="M 60 90 Q 110 10, 210 90 Q 310 170, 360 90 Q 410 10, 210 90 Q 10 170, 60 90"
      stroke="#00bcd4"
      strokeWidth="8"
      fill="none"
      opacity="0.15"
    />
    {/* Animated dots */}
    {[0, 0.33, 0.66].map((offset, idx) => (
      <motion.circle
        key={idx}
        r="12"
        fill="#00bcd4"
        style={{ filter: "drop-shadow(0 0 16px #00bcd4)" }}
        initial={false}
        animate={{
          pathLength: [offset, 1 + offset],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "linear",
          delay: idx * 0.4,
        }}
        // Animate along the path using SVG motionPath
        custom={offset}
      >
        <animateMotion
          dur="2.2s"
          repeatCount="indefinite"
          keyPoints={`${offset};${1 + offset}`}
          keyTimes="0;1"
          calcMode="linear"
        >
          <mpath xlinkHref="#infinityPath" />
        </animateMotion>
      </motion.circle>
    ))}
    {/* Hidden path for animateMotion */}
    <path
      id="infinityPath"
      d="M 60 90 Q 110 10, 210 90 Q 310 170, 360 90 Q 410 10, 210 90 Q 10 170, 60 90"
      fill="none"
    />
  </svg>
);

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTagline(true), 1000);
    const timer2 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Infinity Loader as background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <InfinityLoader />
      </div>
      <div className="relative z-10 text-center">
        {/* Tagline */}
        {showTagline && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
              Empowering Your Digital Future
            </h1>
            <p className="text-cyan-400 text-lg font-medium drop-shadow">
              with INFRORA
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SplashScreen;