import { useState, useCallback } from 'react';
import { AssessmentState, AssessmentResult, Question } from '../types/assessment';
import { quickQuestions, fullQuestions } from '../data/assessment-data';

export function useAssessment() {
  const [state, setState] = useState<AssessmentState>({
    currentQuestionIndex: 0,
    responses: {},
    isQuickPath: false,
    currentQuestions: [],
    isComplete: false,
  });

  const startQuickPath = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      responses: {},
      isQuickPath: true,
      currentQuestions: quickQuestions,
      isComplete: false,
    });
  }, []);

  const startFullAssessment = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      responses: {},
      isQuickPath: false,
      currentQuestions: fullQuestions,
      isComplete: false,
    });
  }, []);

  const selectOption = useCallback((value: string) => {
    const questionId = state.currentQuestions[state.currentQuestionIndex]?.id;
    if (!questionId) return;

    const newResponses = { ...state.responses, [questionId]: value };
    
    setState(prev => ({
      ...prev,
      responses: newResponses,
    }));

    // Auto-advance after selection
    setTimeout(() => {
      if (state.currentQuestionIndex + 1 >= state.currentQuestions.length) {
        setState(prev => ({ ...prev, isComplete: true }));
      } else {
        setState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
        }));
      }
    }, 800);
  }, [state.currentQuestionIndex, state.currentQuestions, state.responses]);

  const previousQuestion = useCallback(() => {
    if (state.currentQuestionIndex > 0) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        isComplete: false,
      }));
    }
  }, [state.currentQuestionIndex]);

  const calculateRecommendation = useCallback((): AssessmentResult => {
    if (state.isQuickPath) {
      const values = Object.values(state.responses);
      const buildCount = values.filter(v => v === 'build').length;
      const buyCount = values.filter(v => v === 'buy').length;

      if (buyCount >= 2) {
        return {
          recommendation: 'BUY',
          confidence: 'High',
          reasoning: 'Strong buy signal based on your responses',
          color: 'success'
        };
      } else if (buildCount >= 2) {
        return {
          recommendation: 'BUILD',
          confidence: 'Medium',
          reasoning: 'Consider building, but complete the full assessment for better guidance',
          color: 'warning'
        };
      } else {
        return {
          recommendation: 'MIXED',
          confidence: 'Low',
          reasoning: 'Mixed signals - recommend taking the full assessment',
          color: 'warning'
        };
      }
    } else {
      const values = Object.values(state.responses);
      const aCount = values.filter(v => v === 'a').length;
      const bCount = values.filter(v => v === 'b').length;
      const cCount = values.filter(v => v === 'c').length;

      const buildScore = (cCount * 2) + bCount;
      const buyScore = (aCount * 2) + bCount;

      if (buildScore > buyScore + 3) {
        return {
          recommendation: 'BUILD',
          confidence: 'High',
          reasoning: 'Your unique requirements and capabilities strongly favor building a custom solution',
          color: 'primary',
          details: { buildScore, buyScore, aCount, bCount, cCount }
        };
      } else if (buyScore > buildScore + 3) {
        return {
          recommendation: 'BUY',
          confidence: 'High',
          reasoning: 'Mature solutions exist and your requirements align well with market offerings',
          color: 'success',
          details: { buildScore, buyScore, aCount, bCount, cCount }
        };
      } else {
        return {
          recommendation: 'HYBRID',
          confidence: 'Medium',
          reasoning: 'Consider a hybrid approach - start with existing solutions and build custom components where needed',
          color: 'warning',
          details: { buildScore, buyScore, aCount, bCount, cCount }
        };
      }
    }
  }, [state.responses, state.isQuickPath]);

  const reset = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      responses: {},
      isQuickPath: false,
      currentQuestions: [],
      isComplete: false,
    });
  }, []);

  const getProgress = useCallback(() => {
    if (state.currentQuestions.length === 0) return 0;
    return ((state.currentQuestionIndex + 1) / state.currentQuestions.length) * 100;
  }, [state.currentQuestionIndex, state.currentQuestions.length]);

  return {
    state,
    startQuickPath,
    startFullAssessment,
    selectOption,
    previousQuestion,
    calculateRecommendation,
    reset,
    getProgress,
  };
}
