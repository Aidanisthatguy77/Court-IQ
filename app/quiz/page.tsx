"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { quizQuestions } from "@/data/basketball";

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [answered, setAnswered] = useState(false);

  const q = quizQuestions[index];

  const choose = (optionIndex: number) => {
    if (answered) return;

    const correct = optionIndex === q.answer;
    setAnswered(true);

    if (correct) {
      setScore((s) => s + 1);
      setFeedback(`Correct read. ${q.feedback}`);
      return;
    }

    setFeedback(`Not the best read yet. ${q.feedback} Misses are part of building game recognition—focus on the first defensive helper and try again.`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">IQ Quiz Mode</h1>
      <p className="text-sm text-slate-400">This is learning feedback, not judgment. Every miss should teach a better read.</p>
      <Card title={`Scenario ${index + 1}`} subtitle={`Score: ${score}/${quizQuestions.length}`}>
        <p className="mb-4 text-slate-200">{q.prompt}</p>
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <button
              key={opt}
              disabled={answered}
              className="block w-full rounded-lg border border-court-line bg-court-panelSoft p-3 text-left text-sm hover:border-court-accent disabled:opacity-60"
              onClick={() => choose(i)}
            >
              {opt}
            </button>
          ))}
        </div>
        {feedback && <p className="mt-4 text-sm text-slate-300">{feedback}</p>}
        <button
          onClick={() => {
            setIndex((i) => (i + 1) % quizQuestions.length);
            setFeedback("");
            setAnswered(false);
          }}
          className="mt-4 rounded-lg bg-court-accent px-4 py-2 text-sm font-semibold text-court-bg"
        >
          Next Question
        </button>
      </Card>
    </div>
  );
}
