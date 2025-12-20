import { ResultContent, ResultType } from "./types";

export const resultContent: Record<ResultType, ResultContent> = {
  "corporate-optimist": {
    type: "corporate-optimist",
    title: "Corporate Optimist",
    emoji: "🌟",
    headline: "Congratulations! You Actually Like Your Job!",
    badge: "Level: Thriving",
    badgeLevel: "Thriving",
    description:
      "Wow. You're either incredibly lucky, in denial, or the person who brings homemade cookies to meetings. Either way, we respect it. Your positivity is either inspiring or slightly terrifying to your colleagues. Keep being that ray of sunshine in the fluorescent-lit office!",
    traits: [
      "Replies 'Happy Monday!' unironically",
      "Actually reads the company newsletter",
      "Volunteers for team building activities",
      "Has a motivational quote on their desk",
    ],
    survivalTip: "Your colleagues secretly admire you. Or they think you're in HR. Either way, keep vibing.",
    shareTextTwitter:
      "Just took a workplace vibe check and apparently I LOVE my job?? I'm a Corporate Optimist. Are you suspiciously happy at work too?",
    shareTextLinkedIn:
      "Took a satirical workplace quiz (for research purposes) and scored Corporate Optimist. Apparently I'm one of the rare ones who actually enjoys Mondays. Curious where you land?",
    shareTextFriend:
      "Your friend thinks you might be TOO happy at work. Take this quiz and prove them wrong (or right):",
    challengeText: "Think your coworker is secretly dying inside? Send them this.",
    gradient: "gradient-optimist",
    badgeColor: "#f59e0b",
    isPositivePath: true,
  },
  "professional-survivor": {
    type: "professional-survivor",
    title: "Professional Survivor",
    emoji: "🎭",
    headline: "You're Holding It Together... Barely",
    badge: "Level: Concerning",
    badgeLevel: "Concerning",
    description:
      "You've mastered the art of the polite smile while dying inside. Your coffee consumption is concerning. Your ability to nod along in meetings while planning dinner is elite. You're not thriving, but you're not quitting either. This is peak corporate endurance.",
    traits: [
      "Says 'I'm fine' with suspicious frequency",
      "Has perfected the meeting nod",
      "Coffee is a food group",
      "Weekend plans = recovering from the week",
    ],
    survivalTip: "You're doing better than you think. The bar is on the floor, and you're at least stepping over it.",
    shareTextTwitter:
      "Apparently I'm a Professional Survivor at work - holding it together with coffee and denial. 73% done with corporate life. Where do you fall?",
    shareTextLinkedIn:
      "Took a workplace reality check quiz. I'm a 'Professional Survivor' - which tracks. The quiz is surprisingly accurate. Dare you to try it.",
    shareTextFriend:
      "Your friend is barely surviving corporate life. They need to know they're not alone. Take this quiz:",
    challengeText: "Misery loves company. Send this to your work bestie.",
    gradient: "gradient-survivor",
    badgeColor: "#6366f1",
    isPositivePath: false,
  },
  "functioning-cynic": {
    type: "functioning-cynic",
    title: "Functioning Cynic",
    emoji: "🙄",
    headline: "You See Through the Corporate BS",
    badge: "Level: Self-Aware",
    badgeLevel: "Self-Aware",
    description:
      "You've decoded the matrix. 'Quick syncs' are never quick. 'Exciting opportunities' mean more work. 'We're a family' means no boundaries. Your eye-roll is legendary. Your sarcasm is a defense mechanism. Your LinkedIn is purely for stalking.",
    traits: [
      "Translates corporate speak fluently",
      "Has a mental list of people to avoid",
      "Eye-roll game is Olympic-level",
      "Uses 'per my last email' as a weapon",
    ],
    survivalTip: "Your cynicism is actually a superpower. It protects you from believing in pizza parties as raises.",
    shareTextTwitter:
      "I'm officially a Functioning Cynic according to this quiz. 'Circle back' triggers my fight-or-flight response. What triggers yours?",
    shareTextLinkedIn:
      "A quiz just told me I'm a Functioning Cynic at work. Honestly, I prefer 'corporate translator.' Curious what your workplace diagnosis is?",
    shareTextFriend:
      "Your friend sees through all the corporate BS. Do you? Take this quiz and find out:",
    challengeText: "Send this to someone who needs to decode the matrix.",
    gradient: "gradient-cynic",
    badgeColor: "#0ea5e9",
    isPositivePath: false,
  },
  "quiet-quitter": {
    type: "quiet-quitter",
    title: "Quiet Quitter",
    emoji: "🤫",
    headline: "You're Doing the Minimum. Strategically.",
    badge: "Level: Efficient",
    badgeLevel: "Efficient",
    description:
      "You've optimized your work-life balance by minimizing the 'work' part. Your out-of-office is always on. Your camera is always off. Your boundaries are immaculate. You're not lazy - you're accurately matching your effort to your compensation.",
    traits: [
      "Boundaries tighter than airport security",
      "Camera off, mic muted, checked out",
      "Effort matches paycheck exactly",
      "Clock hits 5:00? Already gone.",
    ],
    survivalTip: "Act your wage. You're not lazy, you're economically rational. Economists would be proud.",
    shareTextTwitter:
      "Quiz says I'm a Quiet Quitter. I prefer 'work-life boundary optimizer.' Acting my wage is a skill. What's your workplace vibe?",
    shareTextLinkedIn:
      "Got 'Quiet Quitter' on this workplace quiz. I prefer to call it 'strategic effort allocation.' No shame, just honesty. Try it yourself.",
    shareTextFriend:
      "Your friend has perfected the art of doing exactly what they're paid for. Think you're doing more or less? Find out:",
    challengeText: "Know someone who's definitely checked out? Call them out (lovingly).",
    gradient: "gradient-quitter",
    badgeColor: "#22c55e",
    isPositivePath: false,
  },
  "escape-artist": {
    type: "escape-artist",
    title: "Escape Artist",
    emoji: "🚪",
    headline: "You've Mentally Checked Out... And We Get It",
    badge: "Level: Critical",
    badgeLevel: "Critical",
    description:
      "Your LinkedIn has 'Open to Work' enabled but hidden from current employer. Your resume is always updated. You price beach apartments in Portugal monthly. Every Sunday night, you question every decision that led you here. The good news? You're self-aware about it.",
    traits: [
      "Resume updated weekly (just in case)",
      "Knows Portugal cost of living by heart",
      "Sunday Scaries start Saturday",
      "'Open to Work' badge (hidden)",
    ],
    survivalTip: "The escape plan is valid. Keep that resume polished. The right opportunity is out there waiting.",
    shareTextTwitter:
      "I'm an Escape Artist at work. Not the cool Houdini kind. The 'how many job listings can I hide in browser tabs' kind. You probably are too:",
    shareTextLinkedIn:
      "This quiz called me an Escape Artist. My LinkedIn 'Open to Work' is hidden but my intentions are clear. Anyone else constantly planning their exit?",
    shareTextFriend:
      "Your friend is planning their great escape from corporate life. Are you secretly doing the same? Find out:",
    challengeText: "Know someone who's one bad meeting away from quitting? Send this.",
    gradient: "gradient-escape",
    badgeColor: "#a855f7",
    isPositivePath: false,
  },
  "professional-pessimist": {
    type: "professional-pessimist",
    title: "Professional Pessimist",
    emoji: "💀",
    headline: "You've Achieved Full Workplace Enlightenment (Cynicism)",
    badge: "Level: Ascended",
    badgeLevel: "Ascended",
    description:
      "You've seen too much. The HR 'initiatives.' The 'restructuring.' The 'culture improvement' surveys that change nothing. You're not negative - you're just no longer surprised. Welcome to the final stage. Here's your complimentary dark humor and emotional detachment.",
    traits: [
      "Nothing surprises you anymore",
      "Dark humor is a coping mechanism",
      "Survived multiple reorgs",
      "Corporate PTSD is real",
    ],
    survivalTip: "You've reached enlightenment. The only way out is through. Or, you know, actually out.",
    shareTextTwitter:
      "Quiz says I'm a Professional Pessimist. I prefer 'workplace realist.' The optimists just haven't been through enough reorgs yet. Test yourself:",
    shareTextLinkedIn:
      "Apparently I'm a Professional Pessimist. Years of reorgs and 'culture initiatives' will do that. This quiz is eerily accurate. Dare you to try it.",
    shareTextFriend:
      "Your friend has seen things. Corporate things. They've achieved workplace enlightenment. Have you? Take this quiz:",
    challengeText: "Send this to someone who's been through too many reorgs.",
    gradient: "gradient-pessimist",
    badgeColor: "#ec4899",
    isPositivePath: false,
  },
};

// Share URL generators with personalized referral messages
export function generateShareUrl(
  baseUrl: string,
  resultType: ResultType,
  score: number,
  referralType: "friend" | "coworker" | "linkedin" | "twitter" = "friend"
): string {
  const content = resultContent[resultType];
  const referralMessages: Record<string, string> = {
    friend: `Your friend is a ${content.title}!`,
    coworker: `Your coworker is a ${content.title}! Are you the same?`,
    linkedin: `Someone you know is a ${content.title}. Where do you stand?`,
    twitter: `A ${content.title} challenged you to take this quiz!`,
  };

  const params = new URLSearchParams({
    score: score.toString(),
    ref: referralType,
    msg: referralMessages[referralType],
  });

  return `${baseUrl}/result/${resultType}?${params.toString()}`;
}

export function generateChallengeUrl(baseUrl: string, resultType: ResultType): string {
  const content = resultContent[resultType];
  const params = new URLSearchParams({
    challenge: "true",
    from: content.title,
  });

  return `${baseUrl}/quiz?${params.toString()}`;
}

export const allResultTypes: ResultType[] = [
  "corporate-optimist",
  "professional-survivor",
  "functioning-cynic",
  "quiet-quitter",
  "escape-artist",
  "professional-pessimist",
];
