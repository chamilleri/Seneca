import React, { useState } from "react";
import "./Question.scss";
import { Toggle } from "./Toggle";
import { Question as QuestionType } from "./types/Quiz";
import classNames from "classnames";

type AnswerCorrection = {
  id: string;
  correct?: boolean;
};

type QuestionProps = { question: QuestionType };

export const Question = ({ question }: QuestionProps) => {
  const [questionAttempted, setQuestionAttempted] = useState(false);
  const [userAnswers, setUserAnwers] = useState<AnswerCorrection[]>(
    question.answers.map((a) => {
      return { id: a.id };
    })
  );

  const answerColor = () => {
    const noOfInCorrect = userAnswers?.reduce((count, ua) => {
      return count + (ua.correct ? 0 : 1);
    }, 0);
    return noOfInCorrect === 0
      ? "correct"
      : noOfInCorrect < 3
      ? "wrong_lv" + noOfInCorrect
      : "wrong_lv3";
  };

  return (
    <div
      className={classNames("question", {
        [`question--${answerColor()}`]: questionAttempted
      })}
    >
      <div className="question__content">
        <h1 className="question__title">{question.title}</h1>
        <div className="question__answers">
          {question.answers.map((answer) => (
            <Toggle
              key={answer.id}
              options={answer.options}
              onOptionSelected={(option) => {
                setQuestionAttempted(true);
                setUserAnwers([
                  { id: answer.id, correct: option === answer.correct },
                  ...userAnswers.filter((ua) => ua.id !== answer.id)
                ]);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
