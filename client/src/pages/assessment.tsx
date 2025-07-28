import { useAssessment } from '../hooks/use-assessment';
import { ProgressHeader } from '../components/assessment/progress-header';
import { WelcomeScreen } from '../components/assessment/welcome-screen';
import { QuestionScreen } from '../components/assessment/question-screen';
import { ResultsScreen } from '../components/assessment/results-screen';

export default function Assessment() {
  const {
    state,
    startQuickPath,
    startFullAssessment,
    selectOption,
    previousQuestion,
    calculateRecommendation,
    reset,
    getProgress,
  } = useAssessment();

  const currentQuestion = state.currentQuestions[state.currentQuestionIndex];
  const progress = getProgress();

  return (
    <div className="min-h-screen bg-surface">
      <ProgressHeader
        currentQuestion={state.currentQuestionIndex + 1}
        totalQuestions={state.currentQuestions.length}
        progress={progress}
      />
      
      <main className="max-w-4xl mx-auto px-3 py-6 sm:px-4 sm:py-8">
        {!state.currentQuestions.length && !state.isComplete && (
          <WelcomeScreen
            onStartQuickPath={startQuickPath}
            onStartFullAssessment={startFullAssessment}
          />
        )}
        
        {state.currentQuestions.length > 0 && !state.isComplete && currentQuestion && (
          <QuestionScreen
            question={currentQuestion}
            currentIndex={state.currentQuestionIndex}
            onSelectOption={selectOption}
            onPrevious={state.currentQuestionIndex > 0 ? previousQuestion : undefined}
            selectedValue={state.responses[currentQuestion.id]}
          />
        )}
        
        {state.isComplete && (
          <ResultsScreen
            result={calculateRecommendation()}
            isQuickPath={state.isQuickPath}
            onRestart={reset}
            onTakeFullAssessment={state.isQuickPath ? startFullAssessment : undefined}
          />
        )}
      </main>
    </div>
  );
}
