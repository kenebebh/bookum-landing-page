"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimateProps {
  children: React.ReactNode;
  staggerAmount: number;
}

export default function AnimateY({ children, staggerAmount }: AnimateProps) {
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
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
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
