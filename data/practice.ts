export interface PracticeAction {
  key: string;
  name: string;
  type: string;
  offensivePurpose: string;
  defensiveCoverage: string;
  fiveSpots: Record<"1" | "2" | "3" | "4" | "5", string>;
  roleFocus: Record<"1" | "2" | "3" | "4" | "5", string>;
  primaryReads: string[];
  secondaryReads: string[];
  commonMistakes: string[];
  whyItMatters: string;
  whatYouShouldDo: string;
  teachingNotes: string[];
  filmLinks: { label: string; url: string; watchFor: string }[];
}

export const practiceActions: PracticeAction[] = [
  {
    key: "spain-pnr",
    name: "Spain Twist",
    type: "Spain Pick-and-Roll",
    offensivePurpose: "Create rim pressure and pop pressure at the same time, forcing defensive communication errors.",
    defensiveCoverage: "Switch on backscreen + late peel from low man",
    fiveSpots: {
      "1": "Use pace to force on-ball defender over the screen. Keep dribble alive until low man declares. First look is roller pocket, second is shake or pop.",
      "2": "Set backscreen on screener's defender, then pop with hands ready above break. If switched early, back-cut behind top lock.",
      "3": "Hold weak-side corner depth until paint touch, then shake lift to slot window for skip or one-more pass.",
      "4": "Set ball screen with angle to middle. Sprint roll to front rim and seal inside shoulder for deep catch.",
      "5": "Occupy dunker or corner to pin low help. If your defender tags roller, relocate to clean passing angle."
    },
    roleFocus: {
      "1": "You are the decision engine. Your job is to create two-defender commitment before passing.",
      "2": "You stress coverage with the backscreen-pop timing.",
      "3": "You control weak-side spacing and passing lane quality.",
      "4": "You create the initial advantage with screen angle + roll force.",
      "5": "You keep rim help occupied so first read stays open."
    },
    primaryReads: [
      "Low man timing: late tag means roller pocket is first pass.",
      "Backscreener defender behavior: chase = pop open, switch = slip or mismatch seal.",
      "Nail help stunt depth determines skip lane availability."
    ],
    secondaryReads: [
      "One-more pass after skip if X-out closes hard.",
      "Rescreen into empty-side if first action stalls.",
      "Hit short-roll if trap forms above screen."
    ],
    commonMistakes: [
      "Backscreen mistimed before ball turns corner.",
      "Weak-side lift too early, shrinking skip angle.",
      "Ball handler leaves feet without declared read."
    ],
    whyItMatters: "Spain actions create repeatable reads under pressure and improve team clarity in late-clock situations.",
    whatYouShouldDo: "As the 1, call spacing early, attack defender's hip, and decide by second dribble: pocket if tag late, skip if tag loaded, snake pull-up if both stay home.",
    teachingNotes: [
      "Use 5v0 walk-through with verbal read calls before live reps.",
      "In film, freeze at paint touch and ask each player to state their responsibility.",
      "Score reps by correct decision chain, not makes only."
    ],
    filmLinks: [
      { label: "Spain PnR teaching clips", url: "https://www.youtube.com/results?search_query=spain+pick+and+roll+teaching+progression", watchFor: "When does weak-side corner lift relative to paint touch?" },
      { label: "Euroleague Spain reads", url: "https://www.youtube.com/results?search_query=euroleague+spain+pick+and+roll+reads", watchFor: "How quickly is pop-to-one-more pass made?" }
    ]
  },
  {
    key: "horns-twist",
    name: "Horns Twist",
    type: "Horns",
    offensivePurpose: "Enter from balanced alignment then create side advantage through re-screen and weak-side timing.",
    defensiveCoverage: "ICE at side and drop on second screen",
    fiveSpots: {
      "1": "Enter to elbow, receive handback, and attack off twist re-screen. Read low man before committing pocket pass.",
      "2": "Space weak-side slot and time 45 cut if nail help overcommits.",
      "3": "Strong-side corner spacer: be shot ready, then drift baseline on drive.",
      "4": "Set first elbow screen and re-angle for twist re-screen with quick flip hips.",
      "5": "Opposite elbow facilitator: flash short roll window or seal switch mismatch."
    },
    roleFocus: {
      "1": "You trigger timing between both elbow players and keep eyes on low man.",
      "2": "You punish nail help with smart timing cuts.",
      "3": "You stretch help and create drift passing lane.",
      "4": "Your re-screen angle creates the advantage.",
      "5": "You become release valve and mismatch finisher."
    },
    primaryReads: [
      "ICE body angle on first screen.",
      "Drop depth on second screen.",
      "Low man tag source (corner vs wing)."
    ],
    secondaryReads: [
      "Kick to drift corner if baseline help commits.",
      "Hit 45 cutter when nail help turns head.",
      "Throw back to twist screener pop if drop is deep."
    ],
    commonMistakes: [
      "Screener fails to re-angle twist quickly.",
      "Weak-side players stand and don't occupy help.",
      "Ball handler rejects too early with no spacing confirmation."
    ],
    whyItMatters: "Horns Twist gives guards clear reads against common coverages and teaches timing between ball-side and weak-side roles.",
    whatYouShouldDo: "Call the twist early, force defender over the second screen, and keep eyes on low man as your decision trigger.",
    teachingNotes: [
      "Rehearse re-screen footwork before full-speed reps.",
      "Require every possession to include a weak-side movement trigger.",
      "Use constraints: no shot allowed before paint touch in teaching phase."
    ],
    filmLinks: [
      { label: "Horns Twist breakdown", url: "https://www.youtube.com/results?search_query=horns+twist+basketball+breakdown", watchFor: "Check if second screen angle actually creates middle access." },
      { label: "Horns reads vs drop", url: "https://www.youtube.com/results?search_query=horns+offense+reads+vs+drop", watchFor: "Track low-man tag source and first passing window." }
    ]
  }
];
