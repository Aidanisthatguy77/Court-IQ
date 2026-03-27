import { CoachResponse } from "@/lib/types";

export const quickPrompts = [
  "I keep getting stuck vs ICE on side PnR. What is my first job as PG?",
  "In Spain PnR, I am weak-side wing. When exactly do I lift?",
  "How do I attack drop if low man tags from my corner?",
  "Late game, Horns Twist gets switched. What should each player do next?"
];

export interface CoachScenario {
  id: string;
  title: string;
  trigger: string[];
  explanation: string;
  roleJobs: Record<string, string>;
  decisions: string[];
  visualCues: string[];
  errors: string[];
  gameTeaching: string[];
  filmSearchLinks: { label: string; url: string; watchFor: string }[];
}

export const coachScenarios: CoachScenario[] = [
  {
    id: "ice-slot-pnr",
    title: "Slot Side PnR vs ICE (Flat Contain)",
    trigger: ["ice", "slot", "pick", "roll", "pnr"],
    explanation:
      "ICE tries to force you away from the middle. The offense wins by creating a clean two-defender decision and attacking before help sets fully.",
    roleJobs: {
      PG: "Create angle on defender's top foot, keep dribble alive through second read, and pass early when low man commits.",
      SG: "Hold corner depth until help commits, then be ready for skip and one-more passing chain.",
      SF: "Occupy weak-side help and time shake lift only when ball gets paint touch.",
      PF: "Set flat screen angle, sprint roll, and present target early at the pocket window.",
      C: "Keep dunker spacing to pin low man and open roller lane."
    },
    decisions: [
      "Call a lower screen so ICE cannot pin you too high.",
      "Threaten reject for one dribble to move defender's hips.",
      "If low man is late: pocket pass now, not later.",
      "If corner tags: skip then relocate for return pass.",
      "If two stay with ball: snake to middle pull-up window."
    ],
    visualCues: [
      "On-ball defender's top foot angle.",
      "Big defender chest (square vs angled).",
      "Low-man location before your second dribble."
    ],
    errors: [
      "Screen used too high; no driving angle.",
      "Picking up dribble before read declares.",
      "Predetermined skip before forcing help decision."
    ],
    gameTeaching: [
      "Run 3v3 constrained reps: two dribbles max after screen.",
      "Pause film at second dribble and name low man + best pass.",
      "Track turnover cause by read, timing, or pass angle."
    ],
    filmSearchLinks: [
      { label: "NBA side PnR vs ICE", url: "https://www.youtube.com/results?search_query=nba+side+pick+and+roll+vs+ice", watchFor: "Watch when low man tags and how quickly ball is moved." },
      { label: "Pocket pass timing", url: "https://www.youtube.com/results?search_query=pocket+pass+timing+basketball", watchFor: "Pause at release: was defender still behind play or already recovered?" },
      { label: "Snake dribble reads", url: "https://www.youtube.com/results?search_query=snake+dribble+pick+and+roll+reads", watchFor: "Track where the pull-up appears when drop stays deep." }
    ]
  },
  {
    id: "spain-weakside",
    title: "Spain PnR Weak-Side Timing",
    trigger: ["spain", "weak", "wing", "shake", "backscreen"],
    explanation:
      "Spain creates two threats at once: roller at rim and shooter behind action. Weak-side timing decides whether help rotates cleanly or breaks.",
    roleJobs: {
      PG: "Turn the corner with pace and hold dribble until tag declares.",
      SG: "Backscreen roller defender, then pop with hands and feet shot-ready.",
      SF: "Stay deep in corner until paint touch, then shake to clean skip lane.",
      PF: "Set main screen and sprint roll into front-rim seal.",
      C: "Occupy dunker/corner to keep low help attached."
    },
    decisions: [
      "Do not lift early—lift on paint touch, not on play call.",
      "If switch happens early, punish mismatch with seal or cut.",
      "If pop defender helps roller, hit pop first then one-more.",
      "If low man stays home, attack rim or pocket immediately."
    ],
    visualCues: [
      "Low-man hips: turned to roller or still loaded to shooter.",
      "Backscreener defender: chase, switch, or top-lock.",
      "Weak-side X-out speed after first pass."
    ],
    errors: [
      "Weak-side lift too early closes passing lane.",
      "Backscreen set before handler creates downhill threat.",
      "Standing after first pass while defense recovers."
    ],
    gameTeaching: [
      "Use cue: 'paint then lift' on every rep.",
      "Grade possessions by rotation forced, not points scored.",
      "Rehearse spacing with 5v0 before live defensive pressure."
    ],
    filmSearchLinks: [
      { label: "Spain weak-side spacing", url: "https://www.youtube.com/results?search_query=spain+pick+and+roll+weak+side+spacing", watchFor: "Look at exact moment weak-side corner lifts relative to paint touch." },
      { label: "Euroleague Spain reads", url: "https://www.youtube.com/results?search_query=euroleague+spain+pick+and+roll+analysis", watchFor: "Notice how fast one-more pass happens after pop catch." },
      { label: "Low-man decision clips", url: "https://www.youtube.com/results?search_query=low+man+basketball+defense+spain+pnr", watchFor: "Track what coverage fails first: rim tag or pop contest." }
    ]
  }
];

export const defaultCoachResponse: CoachResponse = {
  explanation:
    "Great decisions come from a repeatable sequence: identify coverage, force help to commit, then deliver the simplest on-time pass.",
  whatToDo: [
    "Name coverage before the action starts.",
    "Attack with pace to involve two defenders.",
    "Keep dribble alive until your first clear read.",
    "Relocate after every pass so you stay in the play."
  ],
  whatToLookFor: [
    "Low-man location",
    "Nail help stunt timing",
    "Corner tag-and-recover speed"
  ],
  commonMistakes: [
    "Predetermining a pass",
    "Stopping after first action",
    "Crowding spacing lanes"
  ],
  filmSearchLinks: [
    { label: "Pick-and-roll read progression", url: "https://www.youtube.com/results?search_query=pick+and+roll+read+progression" },
    { label: "Low-man defensive concepts", url: "https://www.youtube.com/results?search_query=low+man+defense+basketball" }
  ]
};
