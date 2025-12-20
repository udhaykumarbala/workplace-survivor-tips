import { Metadata } from "next";
import { QuizContainer } from "@/components/quiz/QuizContainer";

export const metadata: Metadata = {
  title: "Take the Quiz | WorkplaceEscape",
  description: "5 questions. 2 minutes. The truth about your workplace survival level.",
};

interface QuizPageProps {
  searchParams: Promise<{
    ref?: string;
    from?: string;
    challenge?: string;
  }>;
}

export default async function QuizPage({ searchParams }: QuizPageProps) {
  const params = await searchParams;

  return (
    <QuizContainer
      referralSource={params.ref}
      challengeFrom={params.from}
      isChallenge={params.challenge === "true"}
    />
  );
}
