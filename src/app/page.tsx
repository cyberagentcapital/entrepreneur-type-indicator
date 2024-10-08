"use client";

import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Questionnaire from "@components/Questionnaire";
import Result from "@components/Result";
import { AxisResult, TypeAxis, TypeCode } from "@constants/types";
import FirstView from "@components/FirstView";
import { Question } from "@data/questions";
import { getQuestions } from "@actions";
import Cookies from "js-cookie";

const resultCacheExpire = 365;

function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showFirstView, setShowFirstView] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [typeCode, setTypeCode] = useState<TypeCode>();
  const [axisResults, setAxisResults] = useState<Record<
    TypeAxis,
    AxisResult
  > | null>(null);

  const firstViewRef = useRef(null);
  const questionnaireRef = useRef(null);
  const resultRef = useRef(null);

  const saveResultToCookies = (
    newTypeCode: TypeCode,
    newAxisResults: Record<TypeAxis, AxisResult>,
  ) => {
    Cookies.set("cacEntrepreneurTypeCode", JSON.stringify(newTypeCode), {
      expires: resultCacheExpire,
      secure: true,
    });
    Cookies.set(
      "cacEntrepreneurTypeCodeAxisResults",
      JSON.stringify(newAxisResults),
      {
        expires: resultCacheExpire,
        secure: true,
      },
    );
  };

  useEffect(() => {
    const savedTypeCode = Cookies.get("cacEntrepreneurTypeCode");
    const savedAxisResults = Cookies.get("cacEntrepreneurTypeCodeAxisResults");

    if (savedTypeCode && savedAxisResults) {
      setTypeCode(JSON.parse(savedTypeCode));
      setAxisResults(JSON.parse(savedAxisResults));
      saveResultToCookies(
        JSON.parse(savedTypeCode),
        JSON.parse(savedAxisResults),
      );
      setShowResult(true);
    } else {
      setShowFirstView(true);
    }
  }, []);

  const handleStart = async () => {
    setShowFirstView(false);
    setQuestions(await getQuestions());
    setTimeout(() => setShowQuestionnaire(true), 500);
  };

  const handleFinish = (
    resultCode: TypeCode,
    resultAxis: Record<TypeAxis, AxisResult>,
  ) => {
    setShowQuestionnaire(false);
    setTypeCode(resultCode);
    setAxisResults(resultAxis);
    saveResultToCookies(resultCode, resultAxis);
    setTimeout(() => setShowResult(true), 500);
  };

  const handleRestart = () => {
    setShowResult(false);
    setTimeout(() => setShowFirstView(true), 500);
  };

  return (
    <div className="container">
      <CSSTransition
        nodeRef={firstViewRef}
        in={showFirstView}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div ref={firstViewRef}>
          <FirstView onStart={handleStart} />
        </div>
      </CSSTransition>
      <CSSTransition
        nodeRef={questionnaireRef}
        in={showQuestionnaire}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div ref={questionnaireRef}>
          <Questionnaire questions={questions} onFinish={handleFinish} />
        </div>
      </CSSTransition>
      <CSSTransition
        nodeRef={resultRef}
        in={showResult}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div ref={resultRef}>
          {typeCode && axisResults && (
            <Result
              typeCode={typeCode}
              axisResults={axisResults}
              onRestart={handleRestart}
            />
          )}
        </div>
      </CSSTransition>
    </div>
  );
}

export default Home;
