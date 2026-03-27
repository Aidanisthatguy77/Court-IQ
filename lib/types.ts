export type Position = "PG" | "SG" | "SF" | "PF" | "C";

export interface PlayerProfile {
  name: string;
  position: Position;
  height: string;
  weight: string;
  skillLevel: string;
  strengths: string[];
  weaknesses: string[];
  goals: string[];
  injuryHistory: string[];
  returnToPlayStage: string;
}

export interface CoachResponse {
  explanation: string;
  whatToDo: string[];
  whatToLookFor: string[];
  commonMistakes: string[];
  filmSearchLinks: { label: string; url: string }[];
}

export interface LingoTerm {
  term: string;
  definition: string;
  context: string;
}
