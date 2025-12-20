"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "subtle";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const variantClasses = {
  default: "glass",
  elevated: "glass-elevated",
  subtle: "glass-subtle",
};

const paddingClasses = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

export function GlassCard({
  children,
  variant = "default",
  padding = "lg",
  className,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-3xl",
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default GlassCard;
