"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimateProps {
  children: React.ReactNode;
  staggerAmount: number;
  direction: number;
}

export default function AnimateX({
  children,
  staggerAmount,
  direction,
}: AnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: direction },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: staggerAmount }}
      ref={ref}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
