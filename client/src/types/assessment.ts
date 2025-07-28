export interface QuestionOption {
  value: string;
  text: string;
}

export interface Question {
  id: string;
  section: string;
  question: string;
  options: QuestionOption[];
}

export interface AssessmentResult {
  recommendation: 'BUILD' | 'BUY' | 'HYBRID' | 'MIXED';
  confidence: 'High' | 'Medium' | 'Low';
  reasoning: string;
  color: 'primary' | 'success' | 'warning';
  details?: {
    buildScore: number;
    buyScore: number;
    aCount: number;
    bCount: number;
    cCount: number;
  };
}

export interface AssessmentState {
  currentQuestionIndex: number;
  responses: Record<string, string>;
  isQuickPath: boolean;
  currentQuestions: Question[];
  isComplete: boolean;
}
