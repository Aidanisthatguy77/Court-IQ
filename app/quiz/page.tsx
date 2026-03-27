"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { quizQuestions } from "@/data/basketball";

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const q = quizQuestions[index];

  const choose = (optionIndex: number) => {
    const correct = optionIndex === q.answer;
    if (correct) setScore((s) => s + 1);
    setFeedback(`${correct ? "Correct" : "Not quite"}. ${q.feedback}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">IQ Quiz Mode</h1>
      <Card title={`Scenario ${index + 1}`} subtitle={`Score: ${score}/${quizQuestions.length}`}>
        <p className="mb-4 text-slate-200">{q.prompt}</p>
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <button key={opt} className="block w-full rounded-lg border border-court-line bg-court-panelSoft p-3 text-left text-sm hover:border-court-accent" onClick={() => choose(i)}>{opt}</button>
          ))}
        </div>
        {feedback && <p className="mt-4 text-sm text-slate-300">{feedback}</p>}
        <button onClick={() => { setIndex((i) => (i + 1) % quizQuestions.length); setFeedback(""); }} className="mt-4 rounded-lg bg-court-accent px-4 py-2 text-sm font-semibold text-court-bg">Next Question</button>
      </Card>
    </div>
  );
}
