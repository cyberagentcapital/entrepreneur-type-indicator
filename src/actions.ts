"use server";

import { AxisResult, TypeAxis } from "@constants/types";
import { Question, questions } from "@data/questions";
import { typesData } from "@data/types";

export const getQuestions = async (): Promise<Question[]> =>
  questions.map((question) => ({ text: question.text }));

export const calculateResults = async (responses: number[]) => {
  const axisResult: Record<TypeAxis, AxisResult> = Object.keys(
    typesData.axis,
  ).reduce(
    (result, key) => {
      const axisKey = key as TypeAxis;
      return {
        ...result,
        [axisKey]: {
          name: typesData.axis[axisKey].name,
          score: 0,
          count: 0,
          average: 0,
        },
      };
    },
    {} as Record<TypeAxis, AxisResult>,
  );

  // Calculate scores based on responses
  questions.forEach((question, index) => {
    const response = responses[index];
    if (response) {
      const axis = question.axis as TypeAxis;
      axisResult[axis].score += (response - 1) * (question?.weight || 1);
      axisResult[axis].count += 1;
    }
  });

  // Calculate averages for each axis
  Object.keys(axisResult).forEach((key) => {
    const axisKey = key as keyof typeof axisResult;
    if (axisResult[axisKey].count > 0) {
      axisResult[axisKey].average =
        axisResult[axisKey].score / axisResult[axisKey].count;
    }
  });

  // Create the type code based on axis comparisons
  const generatedAxes = Object.keys(typesData.axis)
    .filter((key) => {
      const axisKey = key as TypeAxis;
      return key < typesData.axis[axisKey].compareTo;
    })
    .map((key) => {
      const axisKey = key as TypeAxis;
      const compareToKey = typesData.axis[axisKey].compareTo as TypeAxis;
      return axisResult[axisKey].average > axisResult[compareToKey].average
        ? axisKey
        : compareToKey;
    });
  const typeCode = Object.keys(typesData.types).find((key) => {
    return generatedAxes.every((axis) => key.includes(axis));
  });

  return { typeCode, axisResult };
};
