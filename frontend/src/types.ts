export type NewsItem = {
    title: string;
    source: string;
    publishedAt: string;
    url: string;
    summary?: string;
    sentiment?: "bullish" | "neutral" | "bearish";
    impact?: "low" | "medium" | "high";
  };
  
  export type TradeSignal = {
    signal: "bullish" | "neutral" | "bearish";
    confidence: number;
    bullishFactors: string[];
    bearishFactors: string[];
    risks: string[];
  };
  
  export type IndicatorData = {
    date: string;
    close: number;
    volume: number;
    rsi?: number;
    macd?: number;
  };
  