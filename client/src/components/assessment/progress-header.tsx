import logoPath from "@assets/logo_fl_1753704041345.png";

interface ProgressHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
}

export function ProgressHeader({ currentQuestion, totalQuestions, progress }: ProgressHeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="https://getfluentlogic.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoPath} 
              alt="FluentLogic" 
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain bg-white rounded-lg p-1 sm:p-2"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-secondary">FluentLogic</div>
              <div className="text-xs text-gray-500">AI Assessment</div>
            </div>
          </a>
          
          {/* Progress Info */}
          {totalQuestions > 0 && (
            <div className="text-right">
              <div className="text-sm font-medium text-gray-600">
                Question {currentQuestion} of {totalQuestions}
              </div>
              <div className="text-xs text-gray-400">Assessment Progress</div>
            </div>
          )}
        </div>
        
        {/* Progress Bar */}
        {totalQuestions > 0 && (
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </header>
  );
}
