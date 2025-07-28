import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Rocket, ChartLine } from 'lucide-react';
import logoPath from "@assets/logo_fl_1753704041345.png";

interface WelcomeScreenProps {
  onStartQuickPath: () => void;
  onStartFullAssessment: () => void;
}

export function WelcomeScreen({ onStartQuickPath, onStartFullAssessment }: WelcomeScreenProps) {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 leading-tight">
          AI Agent Build vs Buy Assessment
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Answer questions. Get clear recommendations. Make confident decisions.
        </p>
      </div>
      
      {/* Quick Decision Option - Moved to top */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6 mb-8">
        <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-3 flex items-center">
          <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          Quick Decision Path (2 Minutes)
        </h3>
        <p className="text-blue-700 mb-2">
          <em>For executives who need a fast answer, we can start with 3 key questions:</em>
        </p>
        <div className="bg-white border border-blue-200 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2 mb-1">
            <Clock className="h-4 w-4 text-blue-600" />
            <span className="font-semibold text-blue-800 text-sm">Time Required</span>
          </div>
          <p className="text-blue-700 text-sm">10-15 minutes for the complete assessment but it is totally worth it!</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={onStartQuickPath}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Rocket className="mr-2 h-4 w-4" />
            Quick Assessment
          </Button>
          <Button 
            onClick={onStartFullAssessment}
            className="bg-primary hover:bg-purple-700 text-white"
          >
            <ChartLine className="mr-2 h-4 w-4" />
            Full Assessment
          </Button>
        </div>
      </div>
      
      <Card className="mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold text-secondary mb-6">How This Assessment Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Answer Honestly</h3>
                <p className="text-gray-600">There are no "right" answers - just select what matches your situation</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Auto-Advance</h3>
                <p className="text-gray-600">Select an option and we'll automatically move to the next question</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Get Recommendation</h3>
                <p className="text-gray-600">Receive a personalized Build vs Buy recommendation</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Understand Why</h3>
                <p className="text-gray-600">See detailed explanation of the recommendation</p>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

    </div>
  );
}
