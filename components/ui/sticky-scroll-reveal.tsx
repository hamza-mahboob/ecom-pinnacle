"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"], // Updated offset to ensure full scroll coverage
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1)); // Adjust breakpoints to account for full range

    // Highlight the last card when the scroll is at or near the end
    if (latest === 1) {
      setActiveCard(cardLength - 1);
    } else {
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint);
          if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        0
      );
      setActiveCard(closestBreakpointIndex);
    }
  });

  // Duller background colors for better contrast
  const backgroundColors = [
    "var(--gray-100)",
    "#48466c",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #0A074F, #D48F26)", // Duller gradient
    "linear-gradient(to bottom right, #D48F26, #444444)",
    "linear-gradient(to bottom right, #0A074F, #444444)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-screen overflow-y-auto flex justify-center relative space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 rounded-xl p-4 sm:p-6 md:p-12 lg:p-20 m-2 no-scrollbar"
      ref={ref}
    >
      <div className="relative flex items-start px-2 sm:px-4">
        <div className="max-w-xl lg:max-w-3xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10 sm:my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  activeCard % 2 === 0 ? 'text-gray-900' : 'text-gray-50'}`}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={`text-md sm:text-lg lg:text-xl ${
                  activeCard % 2 === 0 ? 'text-gray-800' : 'text-gray-100'} mt-5 sm:mt-10`}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-20 sm:h-40" />
        </div>
      </div>
      <div
        // style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-[30rem] w-[30rem] rounded-lg bg-white sticky top-40 overflow-hidden bg-transparent",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
