import {
  types,
  TypeCode,
  typeComparisons,
  TypeAxis,
  AxisResult,
} from "@constants/types";

interface ResultProps {
  typeCode: TypeCode;
  axisResults: Record<TypeAxis, AxisResult>;
  onRestart: () => void;
}

function Result({ typeCode, axisResults, onRestart }: ResultProps) {
  const type = types[typeCode] || { title: "不明なタイプ" };

  return (
    <div className="result-container">
      <h2>診断結果</h2>
      <p>
        あなたの起業家タイプは
        <br />
        <strong>「{type.title}」</strong>
        です。
      </p>
      <div className="axis-results">
        {typeComparisons.map(({ axis1, axis2, label1, label2 }) => {
          const score1 = axisResults[axis1 as TypeAxis].average;
          const score2 = axisResults[axis2 as TypeAxis].average;
          const total = score1 + score2 || 1;
          const percentage = (score2 / total) * 100;

          return (
            <div key={`${axis1}-${axis2}`} className="axis-result">
              <div className="result-label">
                <span>{label1}</span>
                <span>{label2}</span>
              </div>
              <div className="result-bar">
                <div
                  className="result-marker"
                  style={{ left: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="cta">
        <button id="start-button" className="start-button" onClick={onRestart}>
          はじめから診断を受ける
        </button>
      </div>
    </div>
  );
}

export default Result;
