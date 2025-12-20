import { ResultType, QuizState, QuizAction } from "./types";

/**
 * Calculate the result type based on total score
 * Score ranges (for 5 questions, max +15 to -15):
 * - >= 10: Corporate Optimist (positive path)
 * - 5 to 9: Professional Survivor
 * - 0 to 4: Functioning Cynic
 * - -5 to -1: Quiet Quitter
 * - -10 to -6: Escape Artist
 * - < -10: Professional Pessimist
 */
export function calculateResult(totalScore: number): ResultType {
  if (totalScore >= 10) return "corporate-optimist";
  if (totalScore >= 5) return "professional-survivor";
  if (totalScore >= 0) return "functioning-cynic";
  if (totalScore >= -5) return "quiet-quitter";
  if (totalScore >= -10) return "escape-artist";
  return "professional-pessimist";
}

/**
 * Check if the result leads to the "boring" positive path
 */
export function isPositivePath(resultType: ResultType): boolean {
  return resultType === "corporate-optimist";
}

/**
 * Calculate a percentage representation of workplace frustration
 * (for display purposes)
 */
export function calculateFrustrationPercentage(totalScore: number): number {
  // Map score from [-15, 15] to [0, 100] frustration percentage
  // Higher frustration = more negative score
  const normalized = ((15 - totalScore) / 30) * 100;
  return Math.round(Math.max(0, Math.min(100, normalized)));
}

/**
 * Initial quiz state
 */
export const initialQuizState: QuizState = {
  status: "idle",
  questions: [],
  currentIndex: 0,
  answers: [],
  totalScore: 0,
  resultType: null,
};

/**
 * Quiz state reducer
 */
export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...initialQuizState,
        status: "in_progress",
        questions: action.questions,
      };

    case "ANSWER_QUESTION":
      const newAnswers = [
        ...state.answers,
        { questionId: action.questionId, points: action.points },
      ];
      const newScore = state.totalScore + action.points;
      const isLastQuestion = state.currentIndex >= state.questions.length - 1;

      if (isLastQuestion) {
        return {
          ...state,
          answers: newAnswers,
          totalScore: newScore,
          status: "calculating",
        };
      }

      return {
        ...state,
        answers: newAnswers,
        totalScore: newScore,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };

    case "CALCULATE_RESULT":
      return {
        ...state,
        status: "complete",
        resultType: calculateResult(state.totalScore),
      };

    case "RESET":
      return initialQuizState;

    default:
      return state;
  }
}
