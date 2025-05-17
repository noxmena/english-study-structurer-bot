
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { ExamQuestion as ExamQuestionType } from '@/data/examData';

interface ExamQuestionProps {
  question: ExamQuestionType;
  onNext: () => void;
  isLast: boolean;
}

const ExamQuestion: React.FC<ExamQuestionProps> = ({ question, onNext, isLast }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowFeedback(true);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    onNext();
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="border-b pb-3">
        <h3 className="text-lg font-medium">{question.question}</h3>
      </CardHeader>
      <CardContent className="pt-4">
        <RadioGroup
          value={selectedAnswer || ""}
          onValueChange={!showFeedback ? setSelectedAnswer : undefined}
          className="space-y-3"
        >
          {question.options.map((option, index) => (
            <div key={index} className={`flex items-center space-x-2 p-2 rounded ${
              showFeedback && option === question.correctAnswer
                ? "bg-green-50 border border-green-200"
                : showFeedback && option === selectedAnswer && option !== question.correctAnswer
                  ? "bg-red-50 border border-red-200"
                  : "hover:bg-gray-50"
            }`}>
              <RadioGroupItem
                value={option}
                id={`option-${question.id}-${index}`}
                disabled={showFeedback}
              />
              <Label
                htmlFor={`option-${question.id}-${index}`}
                className="flex-grow cursor-pointer py-1"
              >
                {option}
              </Label>
              {showFeedback && option === question.correctAnswer && (
                <Check className="h-5 w-5 text-green-500" />
              )}
            </div>
          ))}
        </RadioGroup>
        
        {showFeedback && (
          <div className={`mt-4 p-3 rounded ${isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
            <p className="font-medium">{isCorrect ? "Correct!" : "Incorrect!"}</p>
            {question.explanation && <p className="text-sm mt-1">{question.explanation}</p>}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-3">
        {!showFeedback ? (
          <Button 
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="ml-auto"
          >
            Submit
          </Button>
        ) : (
          <Button onClick={handleNext} className="ml-auto gap-2">
            {isLast ? "Finish" : "Next Question"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ExamQuestion;
