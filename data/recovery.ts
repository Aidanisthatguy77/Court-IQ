export const injuryCategories = [
  "knee", "ankle", "foot", "Achilles", "calf", "hamstring", "quad", "groin / hip flexor", "hip", "glute", "back",
  "shoulder", "elbow", "wrist / hand / fingers", "neck", "concussion / head injury awareness", "overuse conditions",
  "stress reactions / stress fractures", "tendon injuries", "ligament injuries", "muscle strains", "post-surgical return-to-play", "rare or unusual injuries"
];

export const specialistLenses = [
  {
    role: "Sports Medicine Physician",
    focus: "Differential risk, imaging criteria, load restrictions, return-to-play checkpoints",
    guidance: "Escalate for persistent night pain, recurrent instability, neurological symptoms, or functional decline."
  },
  {
    role: "Physical Therapist",
    focus: "Mobility deficits, pain-modulated strength progressions, symmetry trends",
    guidance: "Use tolerable loading and movement-quality metrics to guide progression, not pain alone."
  },
  {
    role: "Athletic Trainer",
    focus: "Day-to-day symptoms, tape/bracing decisions, practice modifications",
    guidance: "Track response to practice blocks and adjust exposure volume rapidly when flare-ups appear."
  },
  {
    role: "Strength & Conditioning",
    focus: "Load management, force development, tissue capacity",
    guidance: "Rebuild outputs gradually with objective metrics before full game density."
  },
  {
    role: "Performance Coach",
    focus: "Confidence, decision speed, role adaptation during recovery",
    guidance: "Protect identity by assigning clear role tasks while physical capacity rebuilds."
  }
];

export const liveResearchMock = {
  refreshedAt: "2026-03-27T10:00:00Z",
  summary:
    "Current consensus across sports medicine organizations emphasizes progressive loading, symptom-guided training adjustments, and prompt referral for red-flag symptoms. Persistent swelling, instability, neurological changes, or worsening pain despite reduced load should trigger medical evaluation.",
  activityMods: [
    "Reduce high-impact deceleration volume for 48-72h after symptom spikes.",
    "Swap live scrimmage for constrained half-court reps when confidence < 6/10.",
    "Prioritize isometrics/eccentrics for tendon-dominant pain under clinician guidance."
  ],
  clinicianQuestions: [
    "What objective criteria should I meet before return to unrestricted play?",
    "Which movements are currently safe to train at full speed?",
    "What symptom trend should trigger re-evaluation?"
  ],
  redFlags: [
    "Inability to bear weight after acute injury",
    "Locking, giving-way, or repeated instability episodes",
    "Progressive neurological symptoms, severe headache, confusion, or vision changes",
    "Fever, severe swelling, or calf pain with unexplained shortness of breath"
  ],
  sources: [
    { name: "American Medical Society for Sports Medicine", type: "Organization guidance" },
    { name: "American Academy of Orthopaedic Surgeons", type: "Clinical references" },
    { name: "BJSM Return-to-Play Frameworks", type: "Peer-reviewed" },
    { name: "JOSPT Clinical Practice Guidelines", type: "Physical therapy evidence" }
  ]
};
