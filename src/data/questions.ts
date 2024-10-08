import { TypeAxis } from "@constants/types";

export interface Question {
  text: string;
  axis?: TypeAxis;
  weight?: number;
}

export const questions: Question[] = [
  {
    text: "新しいビジネスアイデアを考えるとワクワクする。",
    axis: "I",
    weight: 5,
  },
  {
    text: "現実的な制約を考慮して戦略を練る。",
    axis: "P",
    weight: 5,
  },
  {
    text: "困難な状況でも積極的に挑戦したいと思う。",
    axis: "A",
    weight: 5,
  },
  {
    text: "数値や統計情報を重要視する。",
    axis: "D",
    weight: 4,
  },
  {
    text: "データよりも自分の感覚を信じることが多い。",
    axis: "N",
    weight: 3,
  },
  {
    text: "市場の未来を予測し、それに基づいて行動する。",
    axis: "V",
    weight: 4,
  },
  {
    text: "リスクを避けるために詳細な計画を作成する。",
    axis: "C",
    weight: 5,
  },
  {
    text: "計画を迅速かつ効率的に実行することが得意だ。",
    axis: "E",
    weight: 5,
  },
  {
    text: "従来の方法にとらわれず、新しい解決策を探す。",
    axis: "I",
    weight: 5,
  },
  {
    text: "理想よりも実現可能性を優先する。",
    axis: "P",
    weight: 4,
  },
  {
    text: "未知の領域にも挑戦することを恐れない。",
    axis: "A",
    weight: 5,
  },
  {
    text: "データ分析を通じて問題解決するのが好きだ。",
    axis: "D",
    weight: 5,
  },
  {
    text: "業界の未来を予測し、それに備えるのが得意だ。",
    axis: "V",
    weight: 4,
  },
  {
    text: "細かいデータよりも全体の流れを重視する。",
    axis: "N",
    weight: 4,
  },
  {
    text: "リスクを最小限に抑えるために慎重に計画を立てる。",
    axis: "C",
    weight: 5,
  },
  {
    text: "結果を出すことに強い満足感を得る。",
    axis: "E",
    weight: 4,
  },
  {
    text: "革新的なプロジェクトに参加することに興味がある。",
    axis: "I",
    weight: 4,
  },
  {
    text: "現状の課題を解決することに集中する。",
    axis: "P",
    weight: 5,
  },
  {
    text: "リスクが高いほどやりがいを感じる。",
    axis: "A",
    weight: 3,
  },
  {
    text: "データに基づかない判断は避けるべきだと思う。",
    axis: "D",
    weight: 4,
  },
  {
    text: "長期的な目標に向かって努力することが重要だと思う。",
    axis: "V",
    weight: 5,
  },
  {
    text: "直感に従って素早く意思決定を行う。",
    axis: "N",
    weight: 4,
  },
  {
    text: "慎重なアプローチで物事を進めるのが好きだ。",
    axis: "C",
    weight: 4,
  },
  {
    text: "計画を実行に移し、確実に成果を出すことに集中する。",
    axis: "E",
    weight: 5,
  },
  {
    text: "革新的なソリューションを見つけるのが得意だ。",
    axis: "I",
    weight: 5,
  },
  {
    text: "計画を立てる際、現実的なリソースと制約を考慮する。",
    axis: "P",
    weight: 5,
  },
  {
    text: "新しいことを試すのが楽しい。",
    axis: "A",
    weight: 4,
  },
  {
    text: "データに基づいて意思決定を行うべきだと思う。",
    axis: "D",
    weight: 5,
  },
  {
    text: "短期的な利益よりも長期的な成長を重視する。",
    axis: "V",
    weight: 5,
  },
  {
    text: "分析よりも直感で素早く決断する方が効率的だと思う。",
    axis: "N",
    weight: 4,
  },
  {
    text: "確実性が高い選択肢を優先する。",
    axis: "C",
    weight: 4,
  },
  {
    text: "行動に移すことが成功への最善の方法だと思う。",
    axis: "E",
    weight: 4,
  },
  {
    text: "クリエイティブな発想で課題に取り組む。",
    axis: "I",
    weight: 4,
  },
  {
    text: "現実的なゴールを設定し、それを着実に達成する。",
    axis: "P",
    weight: 4,
  },
  {
    text: "リスクが高くても大きなリターンを狙いたい。",
    axis: "A",
    weight: 4,
  },
  {
    text: "意思決定の前にデータを徹底的に分析する。",
    axis: "D",
    weight: 5,
  },
  {
    text: "長期的なビジョンに基づいて行動することが多い。",
    axis: "V",
    weight: 5,
  },
  {
    text: "第一印象や直感を信じることが多い。",
    axis: "N",
    weight: 5,
  },
  {
    text: "不確実な要素がある場合、行動を控える傾向がある。",
    axis: "C",
    weight: 3,
  },
  {
    text: "目標達成に向けて行動を起こすのが早い。",
    axis: "E",
    weight: 4,
  },
];
