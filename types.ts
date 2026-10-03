export interface LinguisticItem {
  id: string;
  es: string;
  hy: string;
  note?: {
    es: string;
    hy: string;
  };
  highlight?: string[];
  type?: 'text' | 'rule' | 'correct' | 'incorrect' | 'example' | 'breakdown';
  breakdownParts?: Array<{
    part: string;
    roleEs: string;
    roleHy: string;
  }>;
}

export interface LinguisticSection {
  id: string;
  number: string;
  titleEs: string;
  titleHy: string;
  summaryEs?: string;
  summaryHy?: string;
  category: 'concept' | 'sign' | 'levels' | 'units' | 'system' | 'summary';
  items: LinguisticItem[];
  extraWidget?: 'units-chain' | 'morpheme' | 'syntax' | 'sign-diagram';
}

export interface QuizQuestion {
  id: string;
  questionEs: string;
  questionHy: string;
  options: Array<{
    id: string;
    textEs: string;
    textHy: string;
  }>;
  correctOptionId: string;
  explanationEs: string;
  explanationHy: string;
}

export type ViewMode = 'interactive' | 'side-by-side' | 'reverse';
