import React from 'react';
import { motion } from 'framer-motion';

const viewportDefaults = {
  once: true,
  amount: 0.15,
  margin: '-50px 0px -50px 0px',
};

/**
 * Wraps content and reveals it with a smooth animation when it scrolls into view.
 * @param {React.ReactNode} children
 * @param {number} delay - Stagger delay in seconds
 * @param {'up'|'down'|'left'|'right'} direction - Direction to slide from
 * @param {boolean} once - Animate only once (default true)
 * @param {number} amount - Fraction of element in view to trigger (0–1)
 * @param {string} className - Optional wrapper class
 */
const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
  once = true,
  amount = 0.15,
  className = '',
}) => {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const offset = directionOffset[direction];
  const axis = direction === 'up' || direction === 'down' ? 'y' : 'x';
  const value = offset[axis];

  const variants = {
    hidden: { opacity: 0, [axis]: value, scale: 0.98 },
    visible: {
      opacity: 1,
      [axis]: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        when: 'beforeChildren',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportDefaults, once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
