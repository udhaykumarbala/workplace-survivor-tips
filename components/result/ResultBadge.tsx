"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface ResultBadgeProps {
  level: string;
  color: string;
}

export function ResultBadge({ level, color }: ResultBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      className={cn(
        "inline-flex items-center gap-2",
        "px-4 py-2",
        "rounded-full",
        "text-white font-medium text-sm",
        "shadow-lg"
      )}
      style={{ backgroundColor: color }}
    >
      <span className="w-2 h-2 rounded-full bg-white/50 animate-pulse" />
      Level: {level}
    </motion.div>
  );
}

export default ResultBadge;
