import { CoachResponse } from "@/lib/types";

export const quickPrompts = [
  "How do I attack ICE coverage from the slot?",
  "What is my weak-side job in Spain PnR as the 45?",
  "How do I punish drop coverage as a PG?",
  "What should I read first in Horns Twist?"
];

export const mockCoachResponse: CoachResponse = {
  explanation:
    "Against ICE, the defense is trying to keep the ball on the sideline and away from the middle. Your goal is to manipulate the screener angle and force a two-on-one decision with pace and spacing discipline.",
  whatToDo: [
    "Flatten the screen: call your big up to set at or below your defender's top foot.",
    "Threaten reject first, then snake if the on-ball defender jumps high.",
    "Hit the pocket pass early if the low man tags from dunker or corner.",
    "If tag comes from corner, throw one-more pass on time, on target."
  ],
  whatToLookFor: [
    "Where is the low man (nail, block, or stunted then recovered)?",
    "Is the screener defender in drop, flat, or up-to-touch?",
    "Did the weak-side wing sink into the gap before your second dribble?"
  ],
  commonMistakes: [
    "Using the screen too high and letting defense pin you to sideline.",
    "Leaving your feet with no read before making the pass.",
    "Skipping the early pocket window and dribbling into congestion."
  ],
  filmSearchLinks: [
    { label: "PG vs ICE reads", url: "https://www.youtube.com/results?search_query=point+guard+vs+ICE+coverage+reads" },
    { label: "NBA side pick and roll counters", url: "https://www.youtube.com/results?search_query=nba+side+pick+and+roll+counters" },
    { label: "Snake dribble breakdown", url: "https://www.youtube.com/results?search_query=snake+dribble+pick+and+roll" }
  ]
};
