'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { OptionWithHTML, QuestionData } from '@/models/Question';
import { Button } from '../ui/button';

interface DisplayedQuestion extends QuestionData {
  optionsWithHTML: OptionWithHTML[];
}

interface QuestionProps {
  question: DisplayedQuestion;
  children: React.ReactNode;
}

export const Question: React.FC<QuestionProps> = async ({
  question,
  children,
}) => {
  const {
    questionNumber,
    questionTitle,
    questionCode,
    optionsWithHTML,
    answer,
    explanation,
  } = question;

  const nextHandler = () => {
    console.log('next');
  };
  console.log('render');

  return (
    <>
      <section className='flex flex-col gap-4'>
        <h1>
          {questionNumber}: {questionTitle}
        </h1>

        {children}
        <RadioGroup>
          {optionsWithHTML.map(({ value, html }) => {
            return (
              <div key={value} className='flex items-center space-x-2'>
                <RadioGroupItem value={value} id={value} />
                <Label
                  className='prose prose-neutral'
                  htmlFor={value}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            );
          })}
        </RadioGroup>
        <Button onClick={nextHandler}>Next</Button>
      </section>
    </>
  );
};

export default Question;
