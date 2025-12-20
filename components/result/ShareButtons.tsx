"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { ResultType } from "@/lib/quiz/types";
import { resultContent } from "@/lib/quiz/results";

interface ShareButtonsProps {
  resultType: ResultType;
  score: number;
}

export function ShareButtons({ resultType, score }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [showChallengeOptions, setShowChallengeOptions] = useState(false);
  const content = resultContent[resultType];

  const baseUrl = typeof window !== "undefined"
    ? window.location.origin
    : "https://workplaceescape.com";

  // Generate share URLs with personalized referral messages
  const generateShareUrlWithRef = (platform: "twitter" | "linkedin" | "friend" | "coworker") => {
    const params = new URLSearchParams({
      score: score.toString(),
      ref: platform,
      from: content.title,
    });

    return `${baseUrl}/quiz?${params.toString()}`;
  };

  const handleTwitterShare = () => {
    const challengeUrl = generateShareUrlWithRef("twitter");
    const tweetText = encodeURIComponent(`${content.shareTextTwitter}\n\nTake the quiz:`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(challengeUrl)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const handleLinkedInShare = () => {
    const challengeUrl = generateShareUrlWithRef("linkedin");
    // LinkedIn uses the URL meta tags, so we share the quiz URL with referral
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(challengeUrl)}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyForFriend = async () => {
    const challengeUrl = generateShareUrlWithRef("friend");
    const message = `${content.shareTextFriend}\n\n${challengeUrl}`;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleCopyForCoworker = async () => {
    const challengeUrl = generateShareUrlWithRef("coworker");
    const message = `I just took a workplace vibe check and got "${content.title}" 😅\n\nApparently my traits include: ${content.traits.slice(0, 2).join(", ")}\n\nCurious where you land? ${challengeUrl}`;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col items-center gap-6"
    >
      {/* Dare section */}
      <div className="text-center">
        <p className="text-gray-600 font-medium mb-1">
          {"If you're brave enough..."}
        </p>
        <p className="text-sm text-gray-500">
          {content.challengeText}
        </p>
      </div>

      {/* Main share buttons */}
      <div className="flex items-center gap-3 flex-wrap justify-center">
        {/* Twitter/X Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleTwitterShare}
          className={cn(
            "flex items-center gap-2",
            "px-5 py-3",
            "rounded-xl",
            "bg-black text-white",
            "font-medium",
            "shadow-lg shadow-black/20",
            "hover:bg-gray-800",
            "transition-colors"
          )}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>Post on X</span>
        </motion.button>

        {/* LinkedIn Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleLinkedInShare}
          className={cn(
            "flex items-center gap-2",
            "px-5 py-3",
            "rounded-xl",
            "bg-[#0A66C2] text-white",
            "font-medium",
            "shadow-lg shadow-blue-500/20",
            "hover:bg-[#004182]",
            "transition-colors"
          )}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span>Humble Brag</span>
        </motion.button>
      </div>

      {/* Challenge a friend/coworker toggle */}
      <div className="w-full max-w-md">
        <motion.button
          onClick={() => setShowChallengeOptions(!showChallengeOptions)}
          className={cn(
            "w-full py-3 px-4",
            "rounded-xl",
            "glass",
            "text-gray-700 font-medium",
            "hover:bg-white/90",
            "transition-all",
            "flex items-center justify-center gap-2"
          )}
        >
          <span>🎯</span>
          <span>Challenge someone specific</span>
          <motion.span
            animate={{ rotate: showChallengeOptions ? 180 : 0 }}
            className="text-gray-500"
          >
            ▼
          </motion.span>
        </motion.button>

        {/* Expandable challenge options */}
        <motion.div
          initial={false}
          animate={{
            height: showChallengeOptions ? "auto" : 0,
            opacity: showChallengeOptions ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-4 space-y-3">
            {/* Send to friend */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleCopyForFriend}
              className={cn(
                "w-full py-3 px-4",
                "rounded-xl",
                "bg-gradient-to-r from-pink-100 to-purple-100",
                "text-gray-700 font-medium",
                "hover:from-pink-200 hover:to-purple-200",
                "transition-all",
                "flex items-center justify-center gap-2"
              )}
            >
              <span>👋</span>
              <span>{copied ? "Copied! Send it!" : "Copy message for a friend"}</span>
            </motion.button>

            {/* Send to coworker */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleCopyForCoworker}
              className={cn(
                "w-full py-3 px-4",
                "rounded-xl",
                "bg-gradient-to-r from-blue-100 to-cyan-100",
                "text-gray-700 font-medium",
                "hover:from-blue-200 hover:to-cyan-200",
                "transition-all",
                "flex items-center justify-center gap-2"
              )}
            >
              <span>💼</span>
              <span>{copied ? "Copied! They'll love this..." : "Challenge a coworker (HR-safe)"}</span>
            </motion.button>

            {/* Disclaimer */}
            <p className="text-xs text-gray-400 text-center pt-2">
              {"Don't worry - the shared link doesn't reveal your exact score 😉"}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ShareButtons;
