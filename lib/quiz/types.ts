export interface Answer {
  id: string;
  text: string;
  points: number;
  vibe: string;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

export type ResultType =
  | "corporate-optimist"
  | "professional-survivor"
  | "functioning-cynic"
  | "quiet-quitter"
  | "escape-artist"
  | "professional-pessimist";

export interface ResultContent {
  type: ResultType;
  title: string;
  emoji: string;
  headline: string;
  badge: string;
  badgeLevel: string;
  description: string;
  traits: string[];
  survivalTip: string;
  shareTextTwitter: string;
  shareTextLinkedIn: string;
  shareTextFriend: string;
  challengeText: string;
  gradient: string;
  badgeColor: string;
  isPositivePath: boolean;
}

export interface QuizState {
  status: "idle" | "in_progress" | "calculating" | "complete";
  questions: Question[];
  currentIndex: number;
  answers: { questionId: string; points: number }[];
  totalScore: number;
  resultType: ResultType | null;
}

export type QuizAction =
  | { type: "START_QUIZ"; questions: Question[] }
  | { type: "ANSWER_QUESTION"; questionId: string; points: number }
  | { type: "NEXT_QUESTION" }
  | { type: "CALCULATE_RESULT" }
  | { type: "RESET" };
