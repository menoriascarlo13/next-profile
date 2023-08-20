export type DefaultValueType = {
  default: boolean;
  name: string;
};

export type LanguageType =
  | (DefaultValueType & {
      language: string;
    })
  | null;

export type MarketType = DefaultValueType & {
  market: string;
};
