import { Question } from "./types";

// Category definitions for variety in question selection
export type QuestionCategory =
  | "original"
  | "meetings"
  | "communication"
  | "politics"
  | "daily-grind"
  | "tech"
  | "coworkers"
  | "remote"
  | "existential";

export interface CategorizedQuestion extends Question {
  category: QuestionCategory;
}

export const allQuestions: CategorizedQuestion[] = [
  // ============================================
  // CATEGORY: Original Questions (Q1-Q7)
  // ============================================
  {
    id: "q1-meeting",
    category: "original",
    text: "Your manager schedules a 'quick 5-minute sync' at 4:55 PM on Friday. You...",
    answers: [
      {
        id: "q1-a",
        text: "Great! I love impromptu collaboration!",
        points: 3,
        vibe: "Corporate Optimist",
      },
      {
        id: "q1-b",
        text: "Open LinkedIn in another tab 'just in case'",
        points: -1,
        vibe: "Escape Artist",
      },
      {
        id: "q1-c",
        text: "Immediately start drafting your 'conflict' excuse",
        points: -2,
        vibe: "Excuse Expert",
      },
      {
        id: "q1-d",
        text: "Accept while silently screaming into the void",
        points: -3,
        vibe: "Silent Sufferer",
      },
    ],
  },
  {
    id: "q2-replyall",
    category: "original",
    text: "Someone reply-alls to 500 people with 'Thanks!' Your reaction?",
    answers: [
      {
        id: "q2-a",
        text: "Appreciate their enthusiasm!",
        points: 3,
        vibe: "Optimist",
      },
      {
        id: "q2-b",
        text: "Silently add them to your mental 'list'",
        points: -1,
        vibe: "Professional",
      },
      {
        id: "q2-c",
        text: "Reply-all back with just 'Unsubscribe'",
        points: -2,
        vibe: "Chaos Agent",
      },
      {
        id: "q2-d",
        text: "Write a 3-paragraph Slack rant to your work bestie",
        points: -3,
        vibe: "Venter",
      },
    ],
  },
  {
    id: "q3-monday",
    category: "original",
    text: "It's 9:01 AM Monday. Your Slack shows 47 unread messages. You...",
    answers: [
      {
        id: "q3-a",
        text: "Dive right in! Fresh week, fresh energy!",
        points: 3,
        vibe: "Morning Person",
      },
      {
        id: "q3-b",
        text: "Coffee first. Messages can wait 30 minutes.",
        points: 0,
        vibe: "Normal Human",
      },
      {
        id: "q3-c",
        text: "Mark all as read. If it's important, they'll follow up.",
        points: -2,
        vibe: "Selective Reader",
      },
      {
        id: "q3-d",
        text: "Close laptop. Go back to bed. Rethink life choices.",
        points: -3,
        vibe: "Over It",
      },
    ],
  },
  {
    id: "q4-credit",
    category: "original",
    text: "A colleague presents YOUR idea as their own in a meeting. You...",
    answers: [
      {
        id: "q4-a",
        text: "Glad the idea is getting traction!",
        points: 3,
        vibe: "Team Player",
      },
      {
        id: "q4-b",
        text: "Politely mention your prior contribution",
        points: 0,
        vibe: "Professional",
      },
      {
        id: "q4-c",
        text: "Screenshot the original Slack message for 'records'",
        points: -1,
        vibe: "Strategic",
      },
      {
        id: "q4-d",
        text: "Start a detailed revenge fantasy that lasts the entire meeting",
        points: -3,
        vibe: "Plotting",
      },
    ],
  },
  {
    id: "q5-jargon",
    category: "original",
    text: "The phrase 'Let's take this offline and circle back with more bandwidth' makes you feel...",
    answers: [
      {
        id: "q5-a",
        text: "Aligned! Clear next steps!",
        points: 3,
        vibe: "Corporate Native",
      },
      {
        id: "q5-b",
        text: "Nothing. I've become immune.",
        points: 0,
        vibe: "Veteran",
      },
      {
        id: "q5-c",
        text: "Physical pain in my soul",
        points: -2,
        vibe: "Jargon Allergy",
      },
      {
        id: "q5-d",
        text: "An urge to create a satirical website about work",
        points: -3,
        vibe: "One of Us",
      },
    ],
  },
  {
    id: "q6-camera",
    category: "original",
    text: "Your most challenging colleague just joined a video call without pants (camera on). You...",
    answers: [
      {
        id: "q6-a",
        text: "Politely DM them about the situation",
        points: 2,
        vibe: "Kind Soul",
      },
      {
        id: "q6-b",
        text: "Screenshot. Store. Never mention.",
        points: -1,
        vibe: "Collector",
      },
      {
        id: "q6-c",
        text: "Nothing. This is the content I live for.",
        points: -2,
        vibe: "Drama Fan",
      },
      {
        id: "q6-d",
        text: "Start a pool on when HR gets involved",
        points: -3,
        vibe: "Bookie",
      },
    ],
  },
  {
    id: "q7-exit",
    category: "original",
    text: "Honestly, if you quit tomorrow, your goodbye Slack message would be...",
    answers: [
      {
        id: "q7-a",
        text: "Heartfelt thanks and LinkedIn connection requests",
        points: 3,
        vibe: "Genuine",
      },
      {
        id: "q7-b",
        text: "Professional and brief",
        points: 1,
        vibe: "Normal",
      },
      {
        id: "q7-c",
        text: "An empty message with just a link to 'Take This Job and Shove It'",
        points: -2,
        vibe: "Dramatic",
      },
      {
        id: "q7-d",
        text: "I've already drafted it and it's saved in my personal folder",
        points: -3,
        vibe: "Ready",
      },
    ],
  },

  // ============================================
  // CATEGORY: Meetings Hell (Q8-Q14)
  // ============================================
  {
    id: "q8-pto-call",
    category: "meetings",
    text: "Your manager asks if you can 'hop on a quick call' while you're clearly on PTO. You...",
    answers: [
      {
        id: "q8-a",
        text: "Happy to help! Work never stops!",
        points: 3,
        vibe: "Workaholic",
      },
      {
        id: "q8-b",
        text: "Respond 2 hours later with 'Just saw this'",
        points: 0,
        vibe: "Strategist",
      },
      {
        id: "q8-c",
        text: "Enable airplane mode and claim you were hiking",
        points: -2,
        vibe: "Escape Artist",
      },
      {
        id: "q8-d",
        text: "You already have an auto-reply essay prepared for this exact scenario",
        points: -3,
        vibe: "Prepared",
      },
    ],
  },
  {
    id: "q9-standup",
    category: "meetings",
    text: "Your 'quick standup' meeting is now at 45 minutes. You...",
    answers: [
      {
        id: "q9-a",
        text: "Love the collaboration! Great team bonding!",
        points: 3,
        vibe: "Team Player",
      },
      {
        id: "q9-b",
        text: "Subtly start doing other work on mute",
        points: 0,
        vibe: "Multitasker",
      },
      {
        id: "q9-c",
        text: "Dramatically announce you have 'another meeting'",
        points: -2,
        vibe: "Actor",
      },
      {
        id: "q9-d",
        text: "You've already mentally drafted your resignation",
        points: -3,
        vibe: "Done",
      },
    ],
  },
  {
    id: "q10-email-meeting",
    category: "meetings",
    text: "Someone schedules a meeting that could've been an email. You...",
    answers: [
      {
        id: "q10-a",
        text: "Meetings foster connection!",
        points: 3,
        vibe: "Optimist",
      },
      {
        id: "q10-b",
        text: "Attend but multitask the entire time",
        points: 0,
        vibe: "Realist",
      },
      {
        id: "q10-c",
        text: "Reply with 'Can you send a summary instead?'",
        points: -1,
        vibe: "Direct",
      },
      {
        id: "q10-d",
        text: "Create a passive-aggressive calendar block called 'Focus Time'",
        points: -3,
        vibe: "Passive Aggressive",
      },
    ],
  },
  {
    id: "q11-no-agenda",
    category: "meetings",
    text: "You're invited to a meeting with no agenda. You...",
    answers: [
      {
        id: "q11-a",
        text: "Great opportunity to align!",
        points: 3,
        vibe: "Flexible",
      },
      {
        id: "q11-b",
        text: "Join and wait to see what happens",
        points: 0,
        vibe: "Passenger",
      },
      {
        id: "q11-c",
        text: "Ask for an agenda (never get one, attend anyway)",
        points: -1,
        vibe: "Hopeful",
      },
      {
        id: "q11-d",
        text: "Decline with 'Happy to join if you can share the agenda first' knowing they won't",
        points: -3,
        vibe: "Calculated",
      },
    ],
  },
  {
    id: "q12-waiting",
    category: "meetings",
    text: "The meeting starts with 'Let's wait for everyone to join.' It's been 8 minutes. You...",
    answers: [
      {
        id: "q12-a",
        text: "No problem! Good chance to catch up with whoever's here!",
        points: 3,
        vibe: "Social",
      },
      {
        id: "q12-b",
        text: "Silently seethe while checking emails",
        points: 0,
        vibe: "Simmering",
      },
      {
        id: "q12-c",
        text: "Pointedly mention you have a hard stop",
        points: -2,
        vibe: "Assertive",
      },
      {
        id: "q12-d",
        text: "You've already started a mental timer for your exit excuse",
        points: -3,
        vibe: "Planner",
      },
    ],
  },
  {
    id: "q13-back-to-back",
    category: "meetings",
    text: "Your calendar shows back-to-back meetings from 9 AM to 5 PM. You...",
    answers: [
      {
        id: "q13-a",
        text: "Productive day ahead!",
        points: 3,
        vibe: "Enthusiast",
      },
      {
        id: "q13-b",
        text: "Accept your fate and grab extra coffee",
        points: 0,
        vibe: "Survivor",
      },
      {
        id: "q13-c",
        text: "Start declining meetings that don't have you as 'required'",
        points: -2,
        vibe: "Optimizer",
      },
      {
        id: "q13-d",
        text: "Block 'focus time' that you have zero intention of using for focus",
        points: -3,
        vibe: "Protector",
      },
    ],
  },
  {
    id: "q14-brief",
    category: "meetings",
    text: "Someone says 'I'll keep this brief' at the start of a meeting. You...",
    answers: [
      {
        id: "q14-a",
        text: "Appreciate the efficiency mindset!",
        points: 3,
        vibe: "Believer",
      },
      {
        id: "q14-b",
        text: "Set a mental timer, knowing it's a lie",
        points: 0,
        vibe: "Experienced",
      },
      {
        id: "q14-c",
        text: "Audibly sigh when it hits the 30-minute mark",
        points: -2,
        vibe: "Expressive",
      },
      {
        id: "q14-d",
        text: "You've started documenting these false promises for your sanity",
        points: -3,
        vibe: "Archivist",
      },
    ],
  },

  // ============================================
  // CATEGORY: Email & Communication Chaos (Q15-Q21)
  // ============================================
  {
    id: "q15-please-advise",
    category: "communication",
    text: "You receive a 'Please advise' email. You...",
    answers: [
      {
        id: "q15-a",
        text: "Drop everything to help!",
        points: 3,
        vibe: "Helper",
      },
      {
        id: "q15-b",
        text: "Add to your mental queue, respond in 24h",
        points: 0,
        vibe: "Organized",
      },
      {
        id: "q15-c",
        text: "Reply with an equally vague 'Let's discuss'",
        points: -1,
        vibe: "Mirror",
      },
      {
        id: "q15-d",
        text: "Screenshot and send to the group chat with '???'",
        points: -3,
        vibe: "Sharer",
      },
    ],
  },
  {
    id: "q16-cc-chain",
    category: "communication",
    text: "You're CC'd on an email chain with 47 messages. You...",
    answers: [
      {
        id: "q16-a",
        text: "Read every message for context!",
        points: 3,
        vibe: "Thorough",
      },
      {
        id: "q16-b",
        text: "Scroll to bottom, reply based on last message",
        points: 0,
        vibe: "Efficient",
      },
      {
        id: "q16-c",
        text: "Delete immediately",
        points: -2,
        vibe: "Ruthless",
      },
      {
        id: "q16-d",
        text: "Reply-all with 'Please remove me from this thread'",
        points: -3,
        vibe: "Bold",
      },
    ],
  },
  {
    id: "q17-multi-channel",
    category: "communication",
    text: "Someone emails you, Slacks you, AND texts you about the same thing. You...",
    answers: [
      {
        id: "q17-a",
        text: "They must really need help! On it!",
        points: 3,
        vibe: "Responsive",
      },
      {
        id: "q17-b",
        text: "Respond to one, ignore the others",
        points: 0,
        vibe: "Practical",
      },
      {
        id: "q17-c",
        text: "Wait to see if they'll add a carrier pigeon next",
        points: -2,
        vibe: "Amused",
      },
      {
        id: "q17-d",
        text: "Block on all platforms (mentally)",
        points: -3,
        vibe: "Done",
      },
    ],
  },
  {
    id: "q18-per-my-last",
    category: "communication",
    text: "You get a 'per my last email' message. You...",
    answers: [
      {
        id: "q18-a",
        text: "Must have missed something, better re-read!",
        points: 3,
        vibe: "Humble",
      },
      {
        id: "q18-b",
        text: "Feel appropriately called out",
        points: 0,
        vibe: "Self-Aware",
      },
      {
        id: "q18-c",
        text: "Appreciate the passive-aggression, respond in kind",
        points: -2,
        vibe: "Competitor",
      },
      {
        id: "q18-d",
        text: "Screenshot for your collection of workplace grievances",
        points: -3,
        vibe: "Collector",
      },
    ],
  },
  {
    id: "q19-hope-well",
    category: "communication",
    text: "An email starts with 'Hope you're doing well!' from someone who clearly doesn't care. You...",
    answers: [
      {
        id: "q19-a",
        text: "Appreciate the courtesy!",
        points: 3,
        vibe: "Gracious",
      },
      {
        id: "q19-b",
        text: "Skip to the actual ask",
        points: 0,
        vibe: "Efficient",
      },
      {
        id: "q19-c",
        text: "Reply with an even longer fake pleasantry",
        points: -1,
        vibe: "Player",
      },
      {
        id: "q19-d",
        text: "You have a macro for this exact response pattern",
        points: -3,
        vibe: "Automated",
      },
    ],
  },
  {
    id: "q20-slack-status",
    category: "communication",
    text: "Your Slack status has been 'In a meeting' for 3 hours. Reality:",
    answers: [
      {
        id: "q20-a",
        text: "Actually in back-to-back productive meetings!",
        points: 3,
        vibe: "Honest",
      },
      {
        id: "q20-b",
        text: "One meeting, rest is buffer time",
        points: 0,
        vibe: "Strategic",
      },
      {
        id: "q20-c",
        text: "Haven't been in a meeting all day",
        points: -2,
        vibe: "Creative",
      },
      {
        id: "q20-d",
        text: "You forgot to change it 2 days ago and no one noticed",
        points: -3,
        vibe: "Invisible",
      },
    ],
  },
  {
    id: "q21-question-mark",
    category: "communication",
    text: "Someone sends a message that's just '?' in response to your earlier message. You...",
    answers: [
      {
        id: "q21-a",
        text: "Happy to clarify!",
        points: 3,
        vibe: "Patient",
      },
      {
        id: "q21-b",
        text: "Confused, but respond anyway",
        points: 0,
        vibe: "Compliant",
      },
      {
        id: "q21-c",
        text: "Send back '??' to assert dominance",
        points: -2,
        vibe: "Competitive",
      },
      {
        id: "q21-d",
        text: "Add them to your mental 'avoid' list",
        points: -3,
        vibe: "Selective",
      },
    ],
  },

  // ============================================
  // CATEGORY: Office Politics & Culture (Q22-Q28)
  // ============================================
  {
    id: "q22-culture-survey",
    category: "politics",
    text: "Your company announces another 'culture survey.' You...",
    answers: [
      {
        id: "q22-a",
        text: "Finally! A chance to share positive feedback!",
        points: 3,
        vibe: "Enthusiast",
      },
      {
        id: "q22-b",
        text: "Give neutral answers to avoid being identified",
        points: 0,
        vibe: "Cautious",
      },
      {
        id: "q22-c",
        text: "Answer honestly, knowing nothing will change",
        points: -2,
        vibe: "Realist",
      },
      {
        id: "q22-d",
        text: "You have a saved template of complaints ready to paste",
        points: -3,
        vibe: "Prepared",
      },
    ],
  },
  {
    id: "q23-team-building",
    category: "politics",
    text: "HR schedules a 'mandatory fun' team building event. You...",
    answers: [
      {
        id: "q23-a",
        text: "I live for these! Team bonding is the best!",
        points: 3,
        vibe: "Social",
      },
      {
        id: "q23-b",
        text: "Attend, participate minimally, leave early",
        points: 0,
        vibe: "Present",
      },
      {
        id: "q23-c",
        text: "Suddenly develop a 'doctor's appointment'",
        points: -2,
        vibe: "Creative",
      },
      {
        id: "q23-d",
        text: "Start a group chat to collectively complain",
        points: -3,
        vibe: "Organizer",
      },
    ],
  },
  {
    id: "q24-review",
    category: "politics",
    text: "Your annual review says you 'meet expectations.' You...",
    answers: [
      {
        id: "q24-a",
        text: "Great! Room to grow!",
        points: 3,
        vibe: "Optimist",
      },
      {
        id: "q24-b",
        text: "Nod and immediately update your resume",
        points: -1,
        vibe: "Strategic",
      },
      {
        id: "q24-c",
        text: "Ask for specific examples (there are none)",
        points: -2,
        vibe: "Curious",
      },
      {
        id: "q24-d",
        text: "You knew this was coming and had already applied elsewhere",
        points: -3,
        vibe: "Ahead",
      },
    ],
  },
  {
    id: "q25-reorg",
    category: "politics",
    text: "Leadership announces a 'reorg' affecting your team. You...",
    answers: [
      {
        id: "q25-a",
        text: "Exciting times! Change is growth!",
        points: 3,
        vibe: "Adaptable",
      },
      {
        id: "q25-b",
        text: "Update LinkedIn to 'Open to Work' (hidden from employer)",
        points: 0,
        vibe: "Prepared",
      },
      {
        id: "q25-c",
        text: "Start backing up your files immediately",
        points: -2,
        vibe: "Cautious",
      },
      {
        id: "q25-d",
        text: "You already predicted this 3 months ago",
        points: -3,
        vibe: "Oracle",
      },
    ],
  },
  {
    id: "q26-family",
    category: "politics",
    text: "Your company's values include 'We're a family.' You...",
    answers: [
      {
        id: "q26-a",
        text: "Love that! So welcoming!",
        points: 3,
        vibe: "Believer",
      },
      {
        id: "q26-b",
        text: "Understand what it actually means (no boundaries)",
        points: 0,
        vibe: "Translator",
      },
      {
        id: "q26-c",
        text: "Cringe internally but say nothing",
        points: -2,
        vibe: "Silent",
      },
      {
        id: "q26-d",
        text: "You've been documenting red flags since day one",
        points: -3,
        vibe: "Investigator",
      },
    ],
  },
  {
    id: "q27-gossip",
    category: "politics",
    text: "There's office gossip about someone you don't particularly like. You...",
    answers: [
      {
        id: "q27-a",
        text: "I don't engage in gossip!",
        points: 3,
        vibe: "Noble",
      },
      {
        id: "q27-b",
        text: "Listen but don't contribute",
        points: 0,
        vibe: "Observer",
      },
      {
        id: "q27-c",
        text: "Listen AND contribute (it's a team sport)",
        points: -2,
        vibe: "Player",
      },
      {
        id: "q27-d",
        text: "You're the source",
        points: -3,
        vibe: "Broadcaster",
      },
    ],
  },
  {
    id: "q28-bad-promotion",
    category: "politics",
    text: "Someone gets promoted who clearly shouldn't have. You...",
    answers: [
      {
        id: "q28-a",
        text: "Happy for their success!",
        points: 3,
        vibe: "Gracious",
      },
      {
        id: "q28-b",
        text: "Confused but move on",
        points: 0,
        vibe: "Unbothered",
      },
      {
        id: "q28-c",
        text: "Spend the rest of the day questioning your career choices",
        points: -2,
        vibe: "Reflective",
      },
      {
        id: "q28-d",
        text: "Add it to the spreadsheet of injustices you're maintaining",
        points: -3,
        vibe: "Accountant",
      },
    ],
  },

  // ============================================
  // CATEGORY: The Daily Grind (Q29-Q35)
  // ============================================
  {
    id: "q29-five-pm",
    category: "daily-grind",
    text: "It's 5:01 PM and your boss sends 'Got a minute?' You...",
    answers: [
      {
        id: "q29-a",
        text: "Always! What can I help with?",
        points: 3,
        vibe: "Available",
      },
      {
        id: "q29-b",
        text: "Reply tomorrow morning claiming you 'just saw this'",
        points: 0,
        vibe: "Boundary Setter",
      },
      {
        id: "q29-c",
        text: "Pretend you already left",
        points: -2,
        vibe: "Ghost",
      },
      {
        id: "q29-d",
        text: "You left at 4:58 PM specifically for this reason",
        points: -3,
        vibe: "Prophetic",
      },
    ],
  },
  {
    id: "q30-weekend-work",
    category: "daily-grind",
    text: "Your coworker brings up weekend work in Monday's standup. You...",
    answers: [
      {
        id: "q30-a",
        text: "So inspired by their dedication!",
        points: 3,
        vibe: "Impressed",
      },
      {
        id: "q30-b",
        text: "Nod along, feel slightly guilty",
        points: 0,
        vibe: "Human",
      },
      {
        id: "q30-c",
        text: "Mentally note to never be that person",
        points: -2,
        vibe: "Observant",
      },
      {
        id: "q30-d",
        text: "Loudly mention your strict work-life boundaries",
        points: -3,
        vibe: "Advocate",
      },
    ],
  },
  {
    id: "q31-lunch-meeting",
    category: "daily-grind",
    text: "The 'optional' company all-hands is during lunch. You...",
    answers: [
      {
        id: "q31-a",
        text: "Free learning opportunity!",
        points: 3,
        vibe: "Learner",
      },
      {
        id: "q31-b",
        text: "Join, mute, eat lunch, half-listen",
        points: 0,
        vibe: "Multitasker",
      },
      {
        id: "q31-c",
        text: "Mark as tentative, never show up",
        points: -2,
        vibe: "Dodger",
      },
      {
        id: "q31-d",
        text: "This is why you 'have meetings' during lunch now",
        points: -3,
        vibe: "Defender",
      },
    ],
  },
  {
    id: "q32-ownership",
    category: "daily-grind",
    text: "You're asked to 'take ownership' of something clearly outside your job description. You...",
    answers: [
      {
        id: "q32-a",
        text: "Love the opportunity to grow!",
        points: 3,
        vibe: "Go-Getter",
      },
      {
        id: "q32-b",
        text: "Accept, add to the list of things you now own",
        points: 0,
        vibe: "Collector",
      },
      {
        id: "q32-c",
        text: "Ask about compensation (get nothing)",
        points: -2,
        vibe: "Negotiator",
      },
      {
        id: "q32-d",
        text: "You've started keeping a 'scope creep' document for your next job search",
        points: -3,
        vibe: "Documenter",
      },
    ],
  },
  {
    id: "q33-battery",
    category: "daily-grind",
    text: "Your laptop battery dies in the middle of a workday. You...",
    answers: [
      {
        id: "q33-a",
        text: "Perfect time to organize my desk and catch up with colleagues!",
        points: 3,
        vibe: "Positive",
      },
      {
        id: "q33-b",
        text: "Find a charger, mildly annoyed",
        points: 0,
        vibe: "Normal",
      },
      {
        id: "q33-c",
        text: "Consider this a sign from the universe",
        points: -2,
        vibe: "Spiritual",
      },
      {
        id: "q33-d",
        text: "The best 2 hours of your work week",
        points: -3,
        vibe: "Liberated",
      },
    ],
  },
  {
    id: "q34-thursday",
    category: "daily-grind",
    text: "It's Thursday but feels like it should be Friday. You...",
    answers: [
      {
        id: "q34-a",
        text: "Every day is a gift!",
        points: 3,
        vibe: "Grateful",
      },
      {
        id: "q34-b",
        text: "Check the calendar three times to confirm",
        points: 0,
        vibe: "Hopeful",
      },
      {
        id: "q34-c",
        text: "Contemplate the meaninglessness of time",
        points: -2,
        vibe: "Philosopher",
      },
      {
        id: "q34-d",
        text: "You've felt this way every day for months",
        points: -3,
        vibe: "Lost",
      },
    ],
  },
  {
    id: "q35-exciting-changes",
    category: "daily-grind",
    text: "Your company announces 'exciting changes' in an all-hands. You...",
    answers: [
      {
        id: "q35-a",
        text: "Can't wait to hear the good news!",
        points: 3,
        vibe: "Excited",
      },
      {
        id: "q35-b",
        text: "Brace for impact",
        points: 0,
        vibe: "Prepared",
      },
      {
        id: "q35-c",
        text: "Already updating your resume before the call ends",
        points: -2,
        vibe: "Proactive",
      },
      {
        id: "q35-d",
        text: "You have a bingo card for corporate announcements ready",
        points: -3,
        vibe: "Veteran",
      },
    ],
  },

  // ============================================
  // CATEGORY: Tech & Tools Frustration (Q36-Q40)
  // ============================================
  {
    id: "q36-new-tool",
    category: "tech",
    text: "The company adopts yet another productivity tool. You...",
    answers: [
      {
        id: "q36-a",
        text: "Excited to learn new skills!",
        points: 3,
        vibe: "Learner",
      },
      {
        id: "q36-b",
        text: "Add it to the 12 other tools you ignore",
        points: 0,
        vibe: "Collector",
      },
      {
        id: "q36-c",
        text: "Continue using the old way, hoping no one notices",
        points: -2,
        vibe: "Rebel",
      },
      {
        id: "q36-d",
        text: "You've already written a Slack rant about 'tool fatigue'",
        points: -3,
        vibe: "Critic",
      },
    ],
  },
  {
    id: "q37-maintenance",
    category: "tech",
    text: "IT announces a 'brief' system maintenance during work hours. You...",
    answers: [
      {
        id: "q37-a",
        text: "Great time for a break!",
        points: 3,
        vibe: "Flexible",
      },
      {
        id: "q37-b",
        text: "Silently grateful for the forced downtime",
        points: 0,
        vibe: "Relieved",
      },
      {
        id: "q37-c",
        text: "Use it as an excuse for anything overdue",
        points: -2,
        vibe: "Opportunist",
      },
      {
        id: "q37-d",
        text: "The highlight of your week",
        points: -3,
        vibe: "Desperate",
      },
    ],
  },
  {
    id: "q38-vpn",
    category: "tech",
    text: "Your VPN disconnects for the 5th time today. You...",
    answers: [
      {
        id: "q38-a",
        text: "Technology! So interesting!",
        points: 3,
        vibe: "Patient",
      },
      {
        id: "q38-b",
        text: "Reconnect, sigh, move on",
        points: 0,
        vibe: "Resilient",
      },
      {
        id: "q38-c",
        text: "Use it as an excuse for delayed responses",
        points: -2,
        vibe: "Opportunist",
      },
      {
        id: "q38-d",
        text: "Write a haiku about your suffering",
        points: -3,
        vibe: "Poet",
      },
    ],
  },
  {
    id: "q39-tickets",
    category: "tech",
    text: "You're asked to update your Jira/Asana/project tool tickets. You...",
    answers: [
      {
        id: "q39-a",
        text: "Love keeping things organized!",
        points: 3,
        vibe: "Organized",
      },
      {
        id: "q39-b",
        text: "Do the bare minimum to avoid follow-ups",
        points: 0,
        vibe: "Minimalist",
      },
      {
        id: "q39-c",
        text: "Bulk update everything to 'In Progress'",
        points: -2,
        vibe: "Efficient",
      },
      {
        id: "q39-d",
        text: "You haven't touched it in so long it's basically an archaeological site",
        points: -3,
        vibe: "Archaeologist",
      },
    ],
  },
  {
    id: "q40-expenses",
    category: "tech",
    text: "The company switches to a new expense system. You...",
    answers: [
      {
        id: "q40-a",
        text: "Excited to learn the new workflow!",
        points: 3,
        vibe: "Adaptable",
      },
      {
        id: "q40-b",
        text: "Procrastinate until the old system is literally deleted",
        points: 0,
        vibe: "Procrastinator",
      },
      {
        id: "q40-c",
        text: "Submit expenses from 6 months ago hoping no one notices the dates",
        points: -2,
        vibe: "Hopeful",
      },
      {
        id: "q40-d",
        text: "You have a folder of receipts from 2019 you've given up on",
        points: -3,
        vibe: "Historian",
      },
    ],
  },

  // ============================================
  // CATEGORY: Coworkers & Social Dynamics (Q41-Q47)
  // ============================================
  {
    id: "q41-microwave-fish",
    category: "coworkers",
    text: "Your coworker microwaves fish in the office kitchen. You...",
    answers: [
      {
        id: "q41-a",
        text: "Everyone deserves to enjoy their lunch!",
        points: 3,
        vibe: "Tolerant",
      },
      {
        id: "q41-b",
        text: "Hold your breath and leave quickly",
        points: 0,
        vibe: "Survivor",
      },
      {
        id: "q41-c",
        text: "Send an anonymous message to the office channel about 'kitchen etiquette'",
        points: -2,
        vibe: "Passive Aggressive",
      },
      {
        id: "q41-d",
        text: "This is why you eat lunch in your car now",
        points: -3,
        vibe: "Exile",
      },
    ],
  },
  {
    id: "q42-coffee-thief",
    category: "coworkers",
    text: "Someone takes credit for the coffee you just made. You...",
    answers: [
      {
        id: "q42-a",
        text: "Plenty to go around!",
        points: 3,
        vibe: "Generous",
      },
      {
        id: "q42-b",
        text: "Mildly annoyed but let it go",
        points: 0,
        vibe: "Mature",
      },
      {
        id: "q42-c",
        text: "Make intense eye contact while making another pot",
        points: -2,
        vibe: "Intense",
      },
      {
        id: "q42-d",
        text: "Start labeling your coffee with your name and a warning",
        points: -3,
        vibe: "Territorial",
      },
    ],
  },
  {
    id: "q43-loud-typer",
    category: "coworkers",
    text: "Your desk neighbor is a loud typer. You...",
    answers: [
      {
        id: "q43-a",
        text: "The sound of productivity!",
        points: 3,
        vibe: "Positive",
      },
      {
        id: "q43-b",
        text: "Invest in noise-canceling headphones",
        points: 0,
        vibe: "Problem Solver",
      },
      {
        id: "q43-c",
        text: "Type louder to assert dominance",
        points: -2,
        vibe: "Competitive",
      },
      {
        id: "q43-d",
        text: "Have genuinely considered reporting this to HR",
        points: -3,
        vibe: "Desperate",
      },
    ],
  },
  {
    id: "q44-smile",
    category: "coworkers",
    text: "A coworker keeps asking if you're 'okay' because you're not smiling. You...",
    answers: [
      {
        id: "q44-a",
        text: "So thoughtful of them to check in!",
        points: 3,
        vibe: "Appreciative",
      },
      {
        id: "q44-b",
        text: "Politely say you're fine",
        points: 0,
        vibe: "Patient",
      },
      {
        id: "q44-c",
        text: "Start forcing an unsettling smile whenever they're around",
        points: -2,
        vibe: "Chaotic",
      },
      {
        id: "q44-d",
        text: "This is exactly why you prefer remote work",
        points: -3,
        vibe: "Introvert",
      },
    ],
  },
  {
    id: "q45-speaker-call",
    category: "coworkers",
    text: "Your colleague has a personal call on speaker in an open office. You...",
    answers: [
      {
        id: "q45-a",
        text: "Must be important!",
        points: 3,
        vibe: "Understanding",
      },
      {
        id: "q45-b",
        text: "Put on headphones and try to focus",
        points: 0,
        vibe: "Adaptive",
      },
      {
        id: "q45-c",
        text: "Start having your own loud fake conversation",
        points: -2,
        vibe: "Petty",
      },
      {
        id: "q45-d",
        text: "You now know more about their divorce than their therapist does",
        points: -3,
        vibe: "Informed",
      },
    ],
  },
  {
    id: "q46-lunch-thief",
    category: "coworkers",
    text: "Someone heats up your labeled lunch from the fridge. You...",
    answers: [
      {
        id: "q46-a",
        text: "Must have been an honest mistake!",
        points: 3,
        vibe: "Forgiving",
      },
      {
        id: "q46-b",
        text: "Passive-aggressively mention your missing lunch in Slack",
        points: 0,
        vibe: "Indirect",
      },
      {
        id: "q46-c",
        text: "Set up a lunch surveillance system",
        points: -2,
        vibe: "Detective",
      },
      {
        id: "q46-d",
        text: "This was the final straw in your decision to job hunt",
        points: -3,
        vibe: "Done",
      },
    ],
  },
  {
    id: "q47-fitness-talk",
    category: "coworkers",
    text: "A coworker won't stop talking about their workout routine. You...",
    answers: [
      {
        id: "q47-a",
        text: "Love their dedication to health!",
        points: 3,
        vibe: "Supportive",
      },
      {
        id: "q47-b",
        text: "Nod along while thinking about literally anything else",
        points: 0,
        vibe: "Polite",
      },
      {
        id: "q47-c",
        text: "Start making up increasingly absurd fitness claims",
        points: -2,
        vibe: "Creative",
      },
      {
        id: "q47-d",
        text: "You've started avoiding the kitchen when they're there",
        points: -3,
        vibe: "Strategic Avoider",
      },
    ],
  },

  // ============================================
  // CATEGORY: Remote Work Reality (Q48-Q54)
  // ============================================
  {
    id: "q48-sweatpants",
    category: "remote",
    text: "You've been wearing the same sweatpants for 3 days of video calls. You...",
    answers: [
      {
        id: "q48-a",
        text: "Comfort is productivity!",
        points: 3,
        vibe: "Comfortable",
      },
      {
        id: "q48-b",
        text: "They're clean-ish, it's fine",
        points: 0,
        vibe: "Practical",
      },
      {
        id: "q48-c",
        text: "Have developed a strategic 'camera-ready' top half only",
        points: -2,
        vibe: "Strategic",
      },
      {
        id: "q48-d",
        text: "You've perfected the waist-up professional, waist-down chaos lifestyle",
        points: -3,
        vibe: "Expert",
      },
    ],
  },
  {
    id: "q49-walk-in",
    category: "remote",
    text: "Your roommate/family member walks into your video call. You...",
    answers: [
      {
        id: "q49-a",
        text: "Love sharing my life with colleagues!",
        points: 3,
        vibe: "Open",
      },
      {
        id: "q49-b",
        text: "Apologize and quickly mute",
        points: 0,
        vibe: "Professional",
      },
      {
        id: "q49-c",
        text: "Pretend nothing happened and maintain eye contact",
        points: -2,
        vibe: "Unbothered",
      },
      {
        id: "q49-d",
        text: "Have installed three locks on your door since starting remote work",
        points: -3,
        vibe: "Fortified",
      },
    ],
  },
  {
    id: "q50-wrong-recipient",
    category: "remote",
    text: "You accidentally sent a message complaining about someone... to that person. You...",
    answers: [
      {
        id: "q50-a",
        text: "Great opportunity for honest conversation!",
        points: 3,
        vibe: "Optimist",
      },
      {
        id: "q50-b",
        text: "Immediately apologize and wish for death",
        points: 0,
        vibe: "Mortified",
      },
      {
        id: "q50-c",
        text: "Claim you were 'hacked'",
        points: -2,
        vibe: "Creative",
      },
      {
        id: "q50-d",
        text: "Start updating your resume while typing the apology",
        points: -3,
        vibe: "Prepared",
      },
    ],
  },
  {
    id: "q51-internet-out",
    category: "remote",
    text: "Your internet goes out during an important presentation. You...",
    answers: [
      {
        id: "q51-a",
        text: "Perfect time to practice patience!",
        points: 3,
        vibe: "Zen",
      },
      {
        id: "q51-b",
        text: "Panic, restart router, rejoin acting natural",
        points: 0,
        vibe: "Human",
      },
      {
        id: "q51-c",
        text: "Blame your ISP in the chat for the next week",
        points: -2,
        vibe: "Deflector",
      },
      {
        id: "q51-d",
        text: "Consider this a sign and contemplate a career change",
        points: -3,
        vibe: "Spiritual",
      },
    ],
  },
  {
    id: "q52-mute",
    category: "remote",
    text: "You realize you've been on mute for 2 minutes of passionate explanation. You...",
    answers: [
      {
        id: "q52-a",
        text: "No problem, happy to repeat!",
        points: 3,
        vibe: "Patient",
      },
      {
        id: "q52-b",
        text: "Die inside, summarize quickly",
        points: 0,
        vibe: "Resilient",
      },
      {
        id: "q52-c",
        text: "Pretend you were done anyway",
        points: -2,
        vibe: "Improviser",
      },
      {
        id: "q52-d",
        text: "This is why you've stopped contributing in meetings",
        points: -3,
        vibe: "Defeated",
      },
    ],
  },
  {
    id: "q53-messy-background",
    category: "remote",
    text: "Your background in a video call reveals you haven't cleaned in weeks. You...",
    answers: [
      {
        id: "q53-a",
        text: "Adds personality!",
        points: 3,
        vibe: "Confident",
      },
      {
        id: "q53-b",
        text: "Quickly enable virtual background",
        points: 0,
        vibe: "Quick Thinker",
      },
      {
        id: "q53-c",
        text: "Strategically angle the camera",
        points: -2,
        vibe: "Director",
      },
      {
        id: "q53-d",
        text: "Have been using the same fake bookshelf background since 2020",
        points: -3,
        vibe: "Consistent",
      },
    ],
  },
  {
    id: "q54-errands",
    category: "remote",
    text: "You've been 'working from home' but actually running errands. You...",
    answers: [
      {
        id: "q54-a",
        text: "I never do this, I'm fully dedicated!",
        points: 3,
        vibe: "Honest",
      },
      {
        id: "q54-b",
        text: "Respond to messages quickly to maintain the illusion",
        points: 0,
        vibe: "Balanced",
      },
      {
        id: "q54-c",
        text: "Have perfected the art of Slack from your phone",
        points: -2,
        vibe: "Mobile Worker",
      },
      {
        id: "q54-d",
        text: "Your best work is done from the grocery store parking lot",
        points: -3,
        vibe: "Nomad",
      },
    ],
  },

  // ============================================
  // CATEGORY: Career Existential Crisis (Q55-Q60)
  // ============================================
  {
    id: "q55-job-description",
    category: "existential",
    text: "You see your job description and realize you do none of those things. You...",
    answers: [
      {
        id: "q55-a",
        text: "I've grown beyond the role!",
        points: 3,
        vibe: "Evolved",
      },
      {
        id: "q55-b",
        text: "Hope no one else notices",
        points: 0,
        vibe: "Quiet",
      },
      {
        id: "q55-c",
        text: "Wonder who's doing that work (no one)",
        points: -2,
        vibe: "Curious",
      },
      {
        id: "q55-d",
        text: "Your actual job is 90% meetings about meetings",
        points: -3,
        vibe: "Realist",
      },
    ],
  },
  {
    id: "q56-five-year-plan",
    category: "existential",
    text: "Your 5-year career plan question in an interview. Honestly, you...",
    answers: [
      {
        id: "q56-a",
        text: "Have a detailed roadmap for growth!",
        points: 3,
        vibe: "Planner",
      },
      {
        id: "q56-b",
        text: "Say what they want to hear",
        points: 0,
        vibe: "Strategic",
      },
      {
        id: "q56-c",
        text: "Haven't planned past next Friday",
        points: -2,
        vibe: "Present",
      },
      {
        id: "q56-d",
        text: "Your 5-year plan is to not be here in 5 years",
        points: -3,
        vibe: "Honest",
      },
    ],
  },
  {
    id: "q57-sunday-scaries",
    category: "existential",
    text: "Sunday evening hits and you remember tomorrow is Monday. You...",
    answers: [
      {
        id: "q57-a",
        text: "Excited for a new week!",
        points: 3,
        vibe: "Enthusiast",
      },
      {
        id: "q57-b",
        text: "Feel a slight dread but push through",
        points: 0,
        vibe: "Normal",
      },
      {
        id: "q57-c",
        text: "The Sunday Scaries are your constant companion",
        points: -2,
        vibe: "Anxious",
      },
      {
        id: "q57-d",
        text: "You've been dreading Monday since Saturday morning",
        points: -3,
        vibe: "Chronic",
      },
    ],
  },
  {
    id: "q58-hourly-rate",
    category: "existential",
    text: "You calculate your hourly rate including all the unpaid overtime. You...",
    answers: [
      {
        id: "q58-a",
        text: "I don't track that, I love what I do!",
        points: 3,
        vibe: "Passionate",
      },
      {
        id: "q58-b",
        text: "Try not to think about it",
        points: 0,
        vibe: "Avoidant",
      },
      {
        id: "q58-c",
        text: "Feel physical pain looking at the number",
        points: -2,
        vibe: "Aware",
      },
      {
        id: "q58-d",
        text: "Have created a detailed spreadsheet that makes you cry",
        points: -3,
        vibe: "Analyst",
      },
    ],
  },
  {
    id: "q59-linkedin-compare",
    category: "existential",
    text: "LinkedIn shows 'People you may know' who are way more successful. You...",
    answers: [
      {
        id: "q59-a",
        text: "So happy for their achievements!",
        points: 3,
        vibe: "Supportive",
      },
      {
        id: "q59-b",
        text: "Scroll past quickly",
        points: 0,
        vibe: "Self-Protective",
      },
      {
        id: "q59-c",
        text: "Spend 30 minutes comparing yourself to strangers",
        points: -2,
        vibe: "Comparer",
      },
      {
        id: "q59-d",
        text: "Have stopped opening LinkedIn for your mental health",
        points: -3,
        vibe: "Recovering",
      },
    ],
  },
  {
    id: "q60-party-question",
    category: "existential",
    text: "You're asked 'What do you do for work?' at a party. You...",
    answers: [
      {
        id: "q60-a",
        text: "Light up while explaining my role!",
        points: 3,
        vibe: "Proud",
      },
      {
        id: "q60-b",
        text: "Give a vague answer and change the subject",
        points: 0,
        vibe: "Deflector",
      },
      {
        id: "q60-c",
        text: "Say 'It pays the bills' with a dead stare",
        points: -2,
        vibe: "Honest",
      },
      {
        id: "q60-d",
        text: "Have developed a fake job to avoid the conversation entirely",
        points: -3,
        vibe: "Creative Writer",
      },
    ],
  },
];

/**
 * Fisher-Yates shuffle algorithm for random question selection
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get questions ensuring variety across categories
 * Selects one question from each of the specified number of categories
 */
export function getRandomQuestions(count: number = 5): Question[] {
  // Group questions by category
  const categories: Record<QuestionCategory, CategorizedQuestion[]> = {
    original: [],
    meetings: [],
    communication: [],
    politics: [],
    "daily-grind": [],
    tech: [],
    coworkers: [],
    remote: [],
    existential: [],
  };

  allQuestions.forEach((q) => {
    categories[q.category].push(q);
  });

  // Get all category keys and shuffle them
  const categoryKeys = shuffleArray(Object.keys(categories) as QuestionCategory[]);

  // Select one random question from each category until we have enough
  const selected: Question[] = [];
  for (const category of categoryKeys) {
    if (selected.length >= count) break;
    const categoryQuestions = categories[category];
    if (categoryQuestions.length > 0) {
      const shuffledCategory = shuffleArray(categoryQuestions);
      selected.push(shuffledCategory[0]);
    }
  }

  // Shuffle the final selection so categories aren't in predictable order
  return shuffleArray(selected);
}
