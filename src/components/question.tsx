import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Code } from 'bright';

import { QuestionData } from '@/models/Question';
import generateHtmlForOptions from '@/lib/generateHtmlForOptions';

interface QuestionProps {
  question: QuestionData;
}

export const Question: React.FC<QuestionProps> = async ({ question }) => {
  const {
    questionNumber,
    questionTitle,
    questionCode,
    options,
    answer,
    explanation,
  } = question;
  const optionsWithHTML = await generateHtmlForOptions(options);

  return (
    <>
      <section className='flex flex-col gap-4'>
        <h1>
          {questionNumber}: {questionTitle}
        </h1>
        <Code lang='js'>{questionCode}</Code>
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
        {/* <div
          className='prose prose-neutral'
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        /> */}
      </section>
    </>
  );
};

export default Question;
