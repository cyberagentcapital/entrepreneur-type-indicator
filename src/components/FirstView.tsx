function FirstView({ onStart }: { onStart: () => void }) {
  return (
    <div id="first-container" className="first-container">
      <h2>あなたの起業家タイプとは？</h2>
      <h3>未来を拓く革新者か、堅実に進む実行者か</h3>
      <p>
        スタートアップ起業家としてのあなたの特性を深く理解するための自己分析ツールです。
      </p>
      <p>40問の質問から、4つの軸で16種類の起業家タイプに分類します。</p>
      <button id="start-button" className="start-button" onClick={onStart}>
        はじめよう
      </button>
      <div id="linework-container" />
    </div>
  );
}

export default FirstView;
