import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import factory from "@/assets/factory.jpg";
import technology from "@/assets/technology.jpg";

export const company = {
  name: "株式会社京西電機",
  nameEn: "Kyosei Denki Co., Ltd.",
  tagline: "設計から量産まで、電子機器を一貫して。",
  description:
    "電子機器の設計・開発・製造からOEM・ODM、試作・量産、保守まで。40年の技術で製造業のものづくりを支えます。",
  tel: "03-0000-0000",
  telHours: "平日 9:00–18:00",
  email: "info@kyosei-denki.example.co.jp",
  address: "〒000-0000 東京都○○区○○ 1-2-3",
};

export const services = [
  {
    icon: "cpu",
    title: "電子機器設計",
    desc: "回路設計・基板設計・筐体設計まで、要件定義から量産設計まで一気通貫で対応します。",
  },
  {
    icon: "settings",
    title: "制御機器開発",
    desc: "組込ソフトウェアからFA制御装置まで、産業用途に耐える堅牢な制御機器を開発します。",
  },
  {
    icon: "layers",
    title: "OEM・ODM",
    desc: "貴社ブランドでの製造・企画開発を受託。小ロットから大量生産までフレキシブルに対応。",
  },
  {
    icon: "wrench",
    title: "試作",
    desc: "コンセプト検証から評価用試作機まで短納期で製作。設計段階からの技術相談も可能です。",
  },
  {
    icon: "factory",
    title: "量産",
    desc: "国内自社工場と協力工場ネットワークによる、高品質・安定供給の量産体制。",
  },
  {
    icon: "shield",
    title: "保守サポート",
    desc: "納入後も長期にわたる保守・修理・部品供給でお客様の事業継続を支えます。",
  },
] as const;

export const reasons = [
  {
    num: "01",
    title: "40年の設計実績",
    desc: "産業機器・計測機器・インフラ機器など多分野の設計実績があり、確かな技術基盤があります。",
  },
  {
    num: "02",
    title: "一貫対応",
    desc: "設計・試作・量産・保守までワンストップ。窓口一本化で開発スピードが上がります。",
  },
  {
    num: "03",
    title: "小ロット対応",
    desc: "1台からの試作、数十台〜の小ロット量産にも柔軟に対応。開発初期段階から並走します。",
  },
  {
    num: "04",
    title: "長期供給の安心",
    desc: "10年以上の長期供給・保守を前提とした設計。廃番リスク低減のため部品戦略も提案します。",
  },
] as const;

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  features: string[];
  usage: string[];
  specs: { label: string; value: string }[];
  options: string[];
};

export const products: Product[] = [
  {
    slug: "kx-controller-1000",
    name: "産業用コントローラ KX-C1000",
    category: "制御機器",
    summary:
      "FA・インフラ設備向けの高信頼性汎用コントローラ。堅牢な筐体と豊富なI/Oで幅広い用途に対応します。",
    image: product1,
    features: [
      "24時間連続稼働対応の高信頼設計",
      "-20〜+60℃の広温度範囲動作",
      "豊富な通信I/F（Ethernet / RS-485 / CAN）",
      "IP54相当の防塵防滴筐体",
    ],
    usage: ["工場設備の制御", "インフラ監視装置", "計測システムのコアユニット"],
    specs: [
      { label: "電源", value: "DC24V ±10%" },
      { label: "消費電力", value: "最大 12W" },
      { label: "動作温度", value: "-20〜+60℃" },
      { label: "外形寸法", value: "180 × 120 × 45 mm" },
      { label: "通信", value: "Ethernet, RS-485, CAN" },
      { label: "保護等級", value: "IP54" },
    ],
    options: ["拡張I/Oボード", "無線通信モジュール", "DINレール金具"],
  },
  {
    slug: "kx-sensor-unit-200",
    name: "センサユニット KX-S200",
    category: "計測機器",
    summary:
      "多点センシングに対応した産業用センサユニット。アルミ切削筐体で高いノイズ耐性を実現。",
    image: product2,
    features: [
      "最大16chの多点計測",
      "アルミ削り出し筐体で高耐環境性",
      "M12コネクタ標準採用",
      "校正証明書発行対応",
    ],
    usage: ["振動・温度モニタリング", "生産ライン品質検査", "設備保全のIoT化"],
    specs: [
      { label: "入力ch数", value: "最大 16ch" },
      { label: "サンプリング", value: "最大 10kHz" },
      { label: "電源", value: "DC24V" },
      { label: "外形寸法", value: "120 × 80 × 35 mm" },
      { label: "コネクタ", value: "M12（IP67）" },
    ],
    options: ["延長ケーブル各種", "壁面取付ブラケット", "校正証明書"],
  },
  {
    slug: "kx-board-custom",
    name: "カスタム基板 KX-BOARD",
    category: "受託開発",
    summary:
      "貴社仕様に合わせた完全カスタム基板の設計・製造。試作から量産までワンストップで対応します。",
    image: product3,
    features: [
      "回路設計〜アートワーク〜実装まで一貫",
      "小ロット試作（1枚〜）対応",
      "RoHS / 車載相当品質にも対応",
      "長期供給を前提とした部品選定",
    ],
    usage: ["独自装置の心臓部", "既存製品の後継設計", "廃番対策の再設計"],
    specs: [
      { label: "対応レイヤ", value: "1〜16層" },
      { label: "最小ロット", value: "1枚〜" },
      { label: "実装", value: "SMD / DIP 混載可" },
      { label: "納期", value: "試作 3〜4週間〜" },
    ],
    options: ["筐体設計込みパッケージ", "組込ソフト開発", "量産移行支援"],
  },
];

export const cases = [
  {
    industry: "製造業",
    title: "生産ライン監視装置の一括更新（20年以上稼働の後継機開発）",
    result: "廃番部品対策・保守コスト40%削減",
    image: factory,
  },
  {
    industry: "インフラ",
    title: "遠隔監視制御装置のOEM開発（10年供給契約）",
    result: "初期開発費用を抑えつつ量産立ち上げに成功",
    image: technology,
  },
  {
    industry: "設備メーカー",
    title: "検査装置向け専用基板の設計・量産（月産500台）",
    result: "他社比 納期30%短縮を実現",
    image: product3,
  },
] as const;

export const news = [
  {
    date: "2026-06-15",
    category: "お知らせ",
    title: "産業用コントローラ KX-C1000 に無線通信オプションを追加しました",
  },
  {
    date: "2026-05-22",
    category: "展示会",
    title: "第38回 設計・製造ソリューション展 に出展します",
  },
  {
    date: "2026-04-10",
    category: "採用",
    title: "2027年度 新卒採用エントリー受付を開始しました",
  },
  {
    date: "2026-03-01",
    category: "会社情報",
    title: "第2工場の稼働を開始し、量産キャパシティを1.5倍に拡張しました",
  },
] as const;

export const faqs = [
  {
    q: "小ロットや試作1台からでも相談できますか？",
    a: "はい。試作1台からの製作、数十台規模の小ロット量産まで柔軟に対応しております。開発初期のコンセプト検証からご相談ください。",
  },
  {
    q: "設計の一部だけを依頼することは可能ですか？",
    a: "回路設計のみ、基板アートワークのみ、量産のみなど、工程単位でのご依頼も承っています。ご要望に合わせて最適な体制をご提案します。",
  },
  {
    q: "見積依頼から納品までの流れを教えてください。",
    a: "お問い合わせ → 要件ヒアリング → お見積・仕様提案 → ご発注 → 設計・試作 → 評価 → 量産、が標準的な流れです。試作納期は3〜4週間が目安です。",
  },
  {
    q: "秘密保持契約（NDA）は締結できますか？",
    a: "はい。初回のご相談段階からNDAの締結が可能です。貴社ひな形での締結にも対応しております。",
  },
  {
    q: "長期供給・保守はどの程度対応可能ですか？",
    a: "10年以上の長期供給・保守を前提とした設計を標準としています。部品廃番対策や後継機開発のご相談も承ります。",
  },
  {
    q: "海外での量産や輸出対応は可能ですか？",
    a: "海外協力工場ネットワークがあり、量産地の選定からご相談可能です。RoHS・REACHなど各種規制対応も実績があります。",
  },
] as const;
