"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressBar({ current, total, className }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className={cn("w-full", className)}>
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {Array.from({ length: total }).map((_, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              scale: index === current - 1 ? 1.2 : 1,
              backgroundColor:
                index < current
                  ? "#a855f7" // purple-500
                  : index === current - 1
                  ? "#a855f7"
                  : "rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              "w-2.5 h-2.5 rounded-full",
              "transition-all duration-300"
            )}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 rounded-full"
        />
      </div>

      {/* Question counter */}
      <p className="text-center text-sm text-gray-500 mt-2">
        Question {current} of {total}
      </p>
    </div>
  );
}

export default ProgressBar;
