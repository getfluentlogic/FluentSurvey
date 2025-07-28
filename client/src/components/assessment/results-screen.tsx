import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Hammer, 
  ShoppingCart, 
  Scale, 
  HelpCircle, 
  Lightbulb, 
  RotateCcw, 
  ChartLine,
  Handshake,
  Mail,
  ExternalLink
} from 'lucide-react';
import { AssessmentResult } from '../../types/assessment';

interface ResultsScreenProps {
  result: AssessmentResult;
  isQuickPath: boolean;
  onRestart: () => void;
  onTakeFullAssessment?: () => void;
}

const iconMap = {
  'BUILD': Hammer,
  'BUY': ShoppingCart,
  'HYBRID': Scale,
  'MIXED': HelpCircle,
};

const colorMap = {
  'primary': 'bg-primary text-white',
  'success': 'bg-primary text-white',
  'warning': 'bg-primary text-white',
};

export function ResultsScreen({ 
  result, 
  isQuickPath, 
  onRestart, 
  onTakeFullAssessment 
}: ResultsScreenProps) {
  const IconComponent = iconMap[result.recommendation];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Your Assessment Results</h1>
        <p className="text-lg text-gray-600">Based on your responses, here's our recommendation</p>
      </div>
      
      <Card className="mb-8 shadow-lg">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center ${colorMap[result.color]} px-8 py-4 rounded-full text-2xl font-bold mb-4`}>
              <IconComponent className="mr-3 h-6 w-6" />
              {result.recommendation}
            </div>
            <div className="text-lg text-gray-600">
              Confidence Level: <span className="font-semibold">{result.confidence}</span>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <Lightbulb className="text-yellow-500 mr-2 h-5 w-5" />
              Why This Recommendation?
            </h3>
            <p className="text-gray-700">{result.reasoning}</p>
          </div>
          
          {result.details && (
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{result.details.aCount}</div>
                <div className="text-sm text-blue-800">Standard Process Responses</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">{result.details.bCount}</div>
                <div className="text-sm text-yellow-800">Mixed Requirement Responses</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{result.details.cCount}</div>
                <div className="text-sm text-purple-800">Unique Requirement Responses</div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onRestart}
              variant="outline"
              className="text-gray-600 border-gray-300 hover:text-gray-800 hover:border-gray-400"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake Assessment
            </Button>
            {isQuickPath && onTakeFullAssessment && (
              <Button 
                onClick={onTakeFullAssessment}
                className="bg-primary hover:bg-purple-700 text-white"
              >
                <ChartLine className="mr-2 h-4 w-4" />
                Take Full Assessment
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* FluentLogic CTA Section */}
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Ready for implementation?</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="mb-6">
              The promise of AI agents is transformative, but for established companies (500-1000 employees in Europe and the US), it can feel complex. At FluentLogic, we believe AI should be a natural, intuitive leap forward, not a puzzle. We make advanced AI agents accessible, understandable, and profoundly effective, delivering measurable impact aligned with your unique strengths.
            </p>
            
            <div className="bg-primary bg-opacity-10 border border-primary border-opacity-20 rounded-lg p-6 mb-6">
              <p className="text-lg font-medium text-primary mb-4 flex items-center">
                <Handshake className="mr-2 h-5 w-5" />
                Ready for genuinely smarter operations?
              </p>
              <p className="mb-4 text-white">
                Cut through the noise: reach out to <strong style={{ color: '#D4F67B' }}>Nidhi Sharma on LinkedIn</strong> for a direct, no-jargon conversation. Your next strategic advantage awaits.
              </p>
              <Button 
                asChild
                className="text-black"
                style={{ backgroundColor: '#D4F67B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C8F065'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D4F67B'}
              >
                <a 
                  href="https://www.linkedin.com/in/nidhionlinkedin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Connect with Nidhi Sharma
                </a>
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="mb-4">
                For continuous, real-world AI insights that actually work in production, join our community. Juno, over 500 builders, and (yes, occasionally) a recovering Kip share lessons and breakthroughs in our newsletter. Help us reach 500 subscribers by the end of August—subscribe today:
              </p>
              <Button 
                asChild
                variant="outline"
                className="text-black"
                style={{ backgroundColor: '#D4F67B', borderColor: '#D4F67B' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C8F065';
                  e.currentTarget.style.borderColor = '#C8F065';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4F67B';
                  e.currentTarget.style.borderColor = '#D4F67B';
                }}
              >
                <a 
                  href="https://getfluentlogic.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Join Our Newsletter
                </a>
              </Button>
              <p className="mt-4 text-sm text-gray-600 italic">Let's make AI fluent, together.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
