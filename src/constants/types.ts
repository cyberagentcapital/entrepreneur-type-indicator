import { typesData } from "@data/types";

export const { types } = typesData;
export type TypeCode = keyof typeof types;
export type TypeAxis = keyof typeof typesData.axis;

export interface AxisResult {
  name: string;
  score: number;
  count: number;
  average: number;
}

export const typeComparisons = (Object.keys(typesData.axis) as TypeAxis[])
  .filter((key) => {
    const axis = typesData.axis[key];
    return key < axis.compareTo;
  })
  .map((key) => {
    const axis = typesData.axis[key];
    return {
      axis1: key,
      axis2: axis.compareTo,
      label1: axis.name,
      label2: typesData.axis[axis.compareTo as TypeAxis].name,
    };
  });
