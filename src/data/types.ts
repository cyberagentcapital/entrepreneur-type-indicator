export interface TypesData {
  axis: Record<
    string,
    {
      name: string;
      compareTo: string;
    }
  >;
  types: Record<string, { title: string }>;
}

export const typesData: TypesData = {
  axis: {
    V: { name: "未来志向", compareTo: "P" },
    P: { name: "現実主義", compareTo: "V" },
    C: { name: "慎重型", compareTo: "A" },
    A: { name: "挑戦型", compareTo: "C" },
    I: { name: "革新型", compareTo: "E" },
    E: { name: "実行型", compareTo: "I" },
    D: { name: "データ重視", compareTo: "N" },
    N: { name: "直感重視", compareTo: "D" },
  },
  types: {
    VCID: { title: "慎重なる未来の開拓者" },
    VCIN: { title: "直感で未来を描く賢者" },
    VCED: { title: "データで未来を築く実践者" },
    VCEN: { title: "未来を紡ぐ直感派ストラテジスト" },
    VAID: { title: "大胆不敵な未来の革新者" },
    VAIN: { title: "直感で未来を切り拓く冒険者" },
    VAED: { title: "未来を駆けるデータの先駆者" },
    VAEN: { title: "直感的な未来のアドベンチャーリーダー" },
    PCID: { title: "現実を革新するデータ戦略家" },
    PCIN: { title: "直感的な現実のイノベーター" },
    PCED: { title: "データで堅実に進む実務家" },
    PCEN: { title: "直感で堅実に進むストラテジスト" },
    PAID: { title: "挑戦する現実派パイオニア" },
    PAIN: { title: "直感で限界を超えるチャレンジャー" },
    PAED: { title: "行動で現実を変えるデータドライバー" },
    PAEN: { title: "未来を拓く直感派リアリスト" },
  },
};
