import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import { Question } from '../../types/assessment';

interface QuestionScreenProps {
  question: Question;
  currentIndex: number;
  onSelectOption: (value: string) => void;
  onPrevious?: () => void;
  selectedValue?: string;
}

export function QuestionScreen({ 
  question, 
  currentIndex, 
  onSelectOption, 
  onPrevious,
  selectedValue 
}: QuestionScreenProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mb-6">
        <div className="text-sm font-medium text-primary mb-2">{question.section}</div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary leading-tight">
          {question.question}
        </h1>
      </div>
      
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <motion.div
                key={option.value}
                className={`cursor-pointer p-3 sm:p-4 border-2 rounded-lg transition-all duration-200 hover:translate-x-1 ${
                  selectedValue === option.value
                    ? 'border-primary bg-primary bg-opacity-5'
                    : 'border-gray-200 hover:border-primary hover:bg-primary hover:bg-opacity-5'
                }`}
                onClick={() => onSelectOption(option.value)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <div 
                      className={`w-3 h-3 bg-primary rounded-full transition-opacity duration-200 ${
                        selectedValue === option.value ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{option.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {currentIndex > 0 && onPrevious && (
        <div className="mt-6 flex justify-start">
          <Button 
            variant="ghost" 
            onClick={onPrevious}
            className="text-gray-600 hover:text-gray-800"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous Question
          </Button>
        </div>
      )}
    </motion.div>
  );
}
