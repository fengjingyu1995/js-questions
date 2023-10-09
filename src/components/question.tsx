import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Code } from 'bright';

import { QuestionData } from '@/models/Question';
import { remark } from 'remark';
import html from 'remark-html';

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
  console.log(options);
  console.log(answer);
  console.log(explanation);

  const processedContent = await remark().use(html).process(explanation);
  const contentHtml = processedContent.toString();
  console.log(contentHtml);

  return (
    <>
      <section className='flex flex-col gap-4'>
        <h1>
          {questionNumber}: {questionTitle}
        </h1>
        <Code lang='js'>{questionCode}</Code>
        <RadioGroup>
          {options.map(({ value, text }) => {
            return (
              <div key={value} className='flex items-center space-x-2'>
                <RadioGroupItem value={value} id={value} />
                <Label htmlFor={value}>
                  <p className='prose prose-slate'>{`${value}: ${text}`}</p>
                </Label>
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
