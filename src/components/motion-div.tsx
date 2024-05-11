"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type MotionDivProps = MotionProps & {
  children: ReactNode;
  className?: string;
};

export function MotionDiv({
  children,
  className,
  ...restProps
}: Readonly<MotionDivProps>) {
  return (
    <motion.div className={className} {...restProps}>
      {children}
    </motion.div>
  );
}
