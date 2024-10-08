"use client";

import { useEffect, useRef, useState } from "react";
import { calculateResults } from "@actions";
import { AxisResult, TypeAxis, TypeCode } from "@constants/types";
import { Question } from "@data/questions";

const questionsPerPage = 10;

interface QuestionnaireProps {
  questions: Question[];
  onFinish: (
    typeCode: TypeCode,
    axisResult: Record<TypeAxis, AxisResult>,
  ) => void;
}

function Questionnaire({ onFinish, questions }: QuestionnaireProps) {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    null,
  );
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setAnswers(new Array(questions.length).fill(null));
    if (questions.length > 0) {
      setActiveQuestionIndex(0);
    }
  }, [questions]);

  useEffect(() => {
    const completedAnswers = answers.filter((answer) => answer != null).length;
    const totalQuestions = questions.length;
    const progressPercentage = (completedAnswers / totalQuestions) * 100;
    setProgress(progressPercentage);
  }, [questions, answers]);

  const scrollToCurrentQuestion = () => {
    if (
      activeQuestionIndex !== null &&
      questionRefs.current[activeQuestionIndex]
    ) {
      questionRefs.current[activeQuestionIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const updateQuestionStyles = (currentQuestionIndex: number) => {
    const start = currentPage * questionsPerPage;
    const end = (currentPage + 1) * questionsPerPage;
    const nextUnansweredIndex = questions.findIndex(
      (_, index) =>
        index > currentQuestionIndex &&
        index >= start &&
        index < end &&
        answers[index] == null,
    );
    if (nextUnansweredIndex !== -1) {
      setActiveQuestionIndex(nextUnansweredIndex);
    } else {
      setActiveQuestionIndex(null);
    }
    scrollToCurrentQuestion();
  };

  const handleAnswer = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    updateQuestionStyles(index);
  };

  const renderQuestions = () => {
    const start = currentPage * questionsPerPage;
    const end = start + questionsPerPage;
    const pageQuestions = questions.slice(
      start,
      Math.min(end, questions.length),
    );

    return pageQuestions.map((question, index) => (
      <div
        key={index}
        ref={(el) => {
          questionRefs.current[start + index] = el;
        }}
        className={`question ${activeQuestionIndex === start + index ? "active" : ""}`}
      >
        <p>{question.text}</p>
        <div className="options-container">
          <div className="options">
            {[7, 6, 5, 4, 3, 2, 1].map((value) => (
              <div className="option" key={value}>
                <input
                  type="radio"
                  id={`answer-${index}-${value}`}
                  name={`answer-${index}`}
                  value={value}
                  checked={answers[start + index] === value}
                  onChange={() => handleAnswer(start + index, value)}
                />
                <label htmlFor={`answer-${index}-${value}`} />
              </div>
            ))}
          </div>
          <div className="labels">
            <span className="left-label">非常に当てはまる</span>
            <span className="right-label">全く当てはまらない</span>
          </div>
        </div>
      </div>
    ));
  };

  const handleSubmit = async () => {
    const { typeCode, axisResult } = await calculateResults(answers);
    onFinish(typeCode as TypeCode, axisResult);
    setTimeout(() => setAnswers([]), 500);
  };

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const goToNextPage = () => {
    // Move to the next page
    setCurrentPage((prev) => prev + 1);

    // Set the first question of the new page as active
    const start = (currentPage + 1) * questionsPerPage;
    setActiveQuestionIndex(start);

    // Scroll to the top of the new page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div id="progress-bar" className="progress-bar">
        <div
          id="progress"
          className="progress"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div id="questionnaire" className="questionnaire">
        <div id="questions-container" className="questions-container">
          {renderQuestions()}
        </div>
        {currentPage < totalPages - 1 && (
          <button className="next-button" onClick={goToNextPage}>
            次へ
          </button>
        )}
        {currentPage === totalPages - 1 && (
          <button className="next-button" onClick={handleSubmit}>
            診断を完了する
          </button>
        )}
      </div>
    </div>
  );
}

export default Questionnaire;
