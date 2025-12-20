"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { Answer } from "@/lib/quiz/types";

interface AnswerOptionProps {
  answer: Answer;
  onSelect: () => void;
  index: number;
  disabled?: boolean;
}

export function AnswerOption({
  answer,
  onSelect,
  index,
  disabled = false,
}: AnswerOptionProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      whileHover={disabled ? undefined : { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      onClick={onSelect}
      disabled={disabled}
      className={cn(
        "w-full text-left",
        "p-4 md:p-5",
        "rounded-2xl",
        "bg-white/60 hover:bg-white/90",
        "backdrop-blur-sm",
        "border border-white/30",
        "shadow-sm hover:shadow-md",
        "transition-all duration-200",
        "text-gray-800",
        "group",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Answer letter indicator */}
        <span
          className={cn(
            "flex-shrink-0",
            "w-7 h-7",
            "rounded-full",
            "bg-gradient-to-br from-purple-100 to-pink-100",
            "border border-purple-200/50",
            "flex items-center justify-center",
            "text-sm font-medium text-purple-600",
            "group-hover:from-purple-200 group-hover:to-pink-200",
            "transition-all duration-200"
          )}
        >
          {String.fromCharCode(65 + index)}
        </span>

        {/* Answer text */}
        <span className="flex-1 text-base md:text-lg leading-relaxed">
          {answer.text}
        </span>
      </div>

      {/* Subtle vibe indicator on hover */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileHover={{ opacity: 1, height: "auto" }}
        className="mt-2 ml-10 text-xs text-purple-500 italic overflow-hidden"
      >
        {answer.vibe} vibes
      </motion.div>
    </motion.button>
  );
}

export default AnswerOption;
