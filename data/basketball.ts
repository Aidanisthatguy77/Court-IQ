export const dashboardData = {
  focus: "Control weak-side tag reads in side PnR",
  recommendedConcept: "Spain Pick-and-Roll spacing hierarchy",
  recoveryStatus: "Green with managed tendon load",
  practicePreview: [
    "10 min dynamic prep + ankle stiffness check",
    "20 min PnR decision reps vs ICE and Drop",
    "20 min advantage games (3v3 no paint catches)",
    "15 min shooting: 5 spots, game-speed pull-up + catch"
  ],
  iqProgress: 74,
  savedTopics: ["Low man reads", "Nail help counters", "Spain weak-side timing"]
};

export const plays = [
  {
    name: "Princeton",
    what: "Read-based continuity offense using chin actions, backdoor cuts, and split entries.",
    why: "Punishes overplay and teaches timing, spacing, and passing precision.",
    reads: ["Top-lock backdoor", "High-post hit", "Weak-side split decision"],
    mistakes: ["Standing after pass", "Late backdoor timing", "Poor high-post spacing"],
    responsibilities: ["1 enters and relocates", "2/3 interchange with cuts", "4 facilitates high-post", "5 screens and seals"]
  },
  { name: "Triangle", what: "Side triangle spacing with pinch post and two-man game weak side.", why: "Creates structured reads without heavy play-calling.", reads: ["Post feed vs single coverage", "Corner lift", "Pinch-post handoff"], mistakes: ["Crowding strong side", "Forcing post feeds"], responsibilities: ["1 triggers entries", "2 corner spacing", "3 wing decision maker", "4 pinch post hub", "5 low block presence"] },
  { name: "Dribble Drive", what: "Attack-first offense with spacing and kickout principles.", why: "Forces rotations and creates paint touches.", reads: ["Gap defender stunt", "Low man tag", "Kick-lift sequence"], mistakes: ["No rim pressure", "Holding ball on kickout"], responsibilities: ["1 collapse defense", "2/3 occupy help", "4 short corner drift", "5 dunker timing"] },
  { name: "Pace & Space", what: "Flow offense focused on quick decisions and spread floor.", why: "Increases shot quality and transition pressure.", reads: ["Early drag coverage", "Corner stay or lift", "Mismatch attack"], mistakes: ["Over-dribbling", "Slow outlet pace"], responsibilities: ["1 push tempo", "2/3 sprint corners", "4 trail spacer", "5 rim run"] },
  { name: "Horns", what: "Two-elbow alignment for multi-option initiations.", why: "Creates symmetry and disguise.", reads: ["Elbow handoff", "High-low", "Twist re-screen"], mistakes: ["Static elbows", "Bad timing on cuts"], responsibilities: ["1 choose entry", "2/3 weak-side interchange", "4/5 elbow actions"] },
  { name: "Spain PnR", what: "Ball screen plus backscreen on rolling big.", why: "Stresses rim and perimeter simultaneously.", reads: ["Roll window", "Backscreener pop", "Weak-side low man"], mistakes: ["Early backscreen", "Crowded corners"], responsibilities: ["1 manipulate coverage", "2 backscreen/pop", "3 shake", "4 screen/roll", "5 weak-side spacing"] },
  { name: "Pistol", what: "Transition handoff into quick ball screen.", why: "Attacks before defense is loaded.", reads: ["Chase lock", "Switch call", "Hit-ahead rejection"], mistakes: ["Late trigger", "No spacing after handoff"], responsibilities: ["1 push and pitch", "2 receive DHO", "3 corner lift", "4 ghost/screen", "5 rim run"] },
  { name: "5-Out", what: "All players outside arc with drive-cut-replace rules.", why: "Maximizes driving lanes and equal decision reps.", reads: ["Nail help", "45 cut lane", "Drift pass"], mistakes: ["Flat cuts", "No paint touch threat"], responsibilities: ["1 attack advantage", "2/3 read-and-cut", "4/5 space and rescreen"] }
];

export const defensiveSystems = [
  { name: "Man", when: "Default base defense", description: "Matchups with help principles.", strengths: "Pressure and accountability", weaknesses: "Requires elite communication", responsibilities: ["Contain ball", "Help and recover", "Finish with box out"] },
  { name: "Zone", when: "Foul trouble or weak individual matchups", description: "Area-based shell coverage.", strengths: "Protects paint", weaknesses: "Rebounding gaps", responsibilities: ["Tag cutters", "Bump flashes", "Locate shooters"] },
  { name: "Switch", when: "Against heavy screening teams", description: "Exchange assignments on screens.", strengths: "Kills action advantage", weaknesses: "Mismatch risk", responsibilities: ["Communicate early", "Scram post mismatches", "Rebound physical"] },
  { name: "Drop", when: "Vs downhill guards", description: "Big stays back to protect rim.", strengths: "Rim protection", weaknesses: "Pull-up exposure", responsibilities: ["Navigate screen", "Rear-view contest", "Low man early tag"] },
  { name: "ICE", when: "Side pick-and-roll", description: "Force ball down sideline/baseline.", strengths: "No middle drives", weaknesses: "Pocket and short corner vulnerability", responsibilities: ["On-ball jump top side", "Big angle to baseline", "Low man at rim"] },
  { name: "Hedge", when: "Disrupt elite pull-up shooters", description: "Big steps out hard then recovers.", strengths: "Breaks rhythm", weaknesses: "Slip exposure", responsibilities: ["Tag roller", "X-out behind action", "Sprint recover"] },
  { name: "Packline", when: "Team-first half-court defense", description: "Off-ball defenders sit inside arc gaps.", strengths: "Paint control", weaknesses: "High-volume 3s conceded", responsibilities: ["Gap positioning", "Controlled closeouts", "No straight-line drives"] }
];

export const drills = [
  { category: "Ball handling", name: "2-Ball Rhythm to Read", goal: "Improve handle under visual load", setup: "2 balls, cones at slot/nail", reps: "5 x 45 seconds", points: ["Eyes up", "Change speed", "Finish with read callout"] },
  { category: "Shooting", name: "Relocation 5-Spot", goal: "Game-speed catch and shoot", setup: "Partner + pass fake closeout", reps: "8 makes each spot", points: ["Shot prep early", "Hop into window", "Track arc consistency"] },
  { category: "Defense", name: "Shell to Scram", goal: "Help-recover communication", setup: "4v4 shell + mismatch trigger", reps: "6 possessions per unit", points: ["Talk early", "Shrink gaps", "Finish rebound"] },
  { category: "Footwork", name: "Decel to Float", goal: "Control in paint", setup: "Cones at elbows/lane line", reps: "4 sets each side", points: ["Hip drop", "Two-foot stop", "Eyes on weak-side shot blocker"] },
  { category: "Conditioning", name: "Court Lanes Tempo", goal: "Basketball-specific repeat sprint ability", setup: "Lane touch intervals", reps: "8 x 22 sec on / 38 sec off", points: ["Efficient turns", "Nasal recovery", "Quality over collapse"] },
  { category: "IQ", name: "Advantage Freeze", goal: "Read progression training", setup: "3v3 with coach freeze calls", reps: "12 live reps", points: ["Name first read", "Identify low man", "Call best pass"] }
];

export const quizQuestions = [
  {
    prompt: "You run side PnR and low man tags early from weak-side corner. Best read?",
    options: ["Skip pass to weak corner", "Pull-up from 3", "Reject and retreat"],
    answer: 0,
    feedback: "Correct. Early low-man tag opens direct or one-more skip to weak corner shooter."
  },
  {
    prompt: "Against drop coverage, what is your first scoring pressure as PG?",
    options: ["Throw lob immediately", "Force baseline drift", "Engage defender with downhill pace then threaten pull-up"],
    answer: 2,
    feedback: "Correct. You must force the big to choose between contesting pull-up or conceding roller lane."
  }
];
