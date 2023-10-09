interface Option {
  value: string;
  text: string;
}

export interface QuestionData {
  questionNumber: string;
  questionTitle: string;
  questionCode: string;
  options: Option[];
  answer: string;
  explanation: string;
}
