export interface Option {
  value: string;
  text: string;
}

export interface OptionWithHTML extends Option {
  html: string;
}

export interface QuestionData {
  questionNumber: string;
  questionTitle: string;
  questionCode: string;
  options: Option[];
  answer: string;
  explanation: string;
}
