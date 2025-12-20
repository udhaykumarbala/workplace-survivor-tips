"use client";

import { useReducer, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getRandomQuestions } from "@/lib/quiz/questions";
import { quizReducer, initialQuizState, calculateResult } from "@/lib/quiz/scoring";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { QuestionCard } from "./QuestionCard";

interface QuizContainerProps {
  referralSource?: string;
  challengeFrom?: string;
  isChallenge?: boolean;
}

export function QuizContainer({ referralSource, challengeFrom }: QuizContainerProps) {
  const router = useRouter();
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showChallengeBanner, setShowChallengeBanner] = useState(!!challengeFrom);

  // Initialize quiz with random questions
  useEffect(() => {
    const questions = getRandomQuestions(5);
    dispatch({ type: "START_QUIZ", questions });
  }, []);

  const handleAnswer = useCallback(
    (questionId: string, points: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);

      // Record the answer
      dispatch({ type: "ANSWER_QUESTION", questionId, points });

      const isLastQuestion = state.currentIndex >= state.questions.length - 1;

      if (isLastQuestion) {
        // Calculate final result and navigate
        const finalScore = state.totalScore + points;
        const resultType = calculateResult(finalScore);

        // Brief pause for animation, then redirect
        setTimeout(() => {
          router.push(`/result/${resultType}?score=${finalScore}`);
        }, 600);
      } else {
        // Move to next question after animation
        setTimeout(() => {
          dispatch({ type: "NEXT_QUESTION" });
          setIsTransitioning(false);
        }, 400);
      }
    },
    [state.currentIndex, state.questions.length, state.totalScore, isTransitioning, router]
  );

  // Generate challenge message based on referral
  const getChallengeMessage = () => {
    if (!challengeFrom) return null;

    const messages: Record<string, string> = {
      friend: `Your friend (a ${challengeFrom}) thinks you should take this quiz...`,
      coworker: `Your coworker just scored "${challengeFrom}". Do you dare to compare?`,
      linkedin: `Someone in your network is a ${challengeFrom}. Where do you stand?`,
      twitter: `A ${challengeFrom} challenged you! Time to find out your workplace vibe.`,
    };

    return messages[referralSource || "friend"] || `A ${challengeFrom} sent you here. No pressure.`;
  };

  // Show loading state while initializing
  if (state.status === "idle" || state.questions.length === 0) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-full h-full rounded-full border-4 border-purple-200 border-t-purple-500"
            />
          </div>
          <p className="text-gray-600 font-medium">Preparing your vibe check...</p>
        </motion.div>
      </div>
    );
  }

  // Show calculating state
  if (state.status === "calculating") {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🔮
          </motion.div>
          <p className="text-gray-700 font-medium text-lg">Analyzing your workplace vibes...</p>
          <p className="text-gray-500 text-sm mt-2">This might be concerning...</p>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = state.questions[state.currentIndex];

  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      {/* Challenge banner */}
      <AnimatePresence>
        {showChallengeBanner && challengeFrom && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4"
          >
            <div className="max-w-xl mx-auto flex items-center justify-between">
              <p className="text-sm font-medium">
                🎯 {getChallengeMessage()}
              </p>
              <button
                onClick={() => setShowChallengeBanner(false)}
                className="text-white/80 hover:text-white transition-colors ml-4"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress section */}
      <div className="pt-8 px-4">
        <div className="max-w-xl mx-auto">
          <ProgressBar
            current={state.currentIndex + 1}
            total={state.questions.length}
          />
        </div>
      </div>

      {/* Question section */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <AnimatePresence mode="wait">
          {currentQuestion && (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              questionNumber={state.currentIndex + 1}
              totalQuestions={state.questions.length}
              onAnswer={handleAnswer}
              isTransitioning={isTransitioning}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Footer hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="pb-8 text-center"
      >
        <p className="text-sm text-gray-500">
          {"Be honest. Your HR department isn't watching."}{" "}
          <span className="text-gray-400">Probably.</span>
        </p>
      </motion.div>
    </div>
  );
}

export default QuizContainer;
