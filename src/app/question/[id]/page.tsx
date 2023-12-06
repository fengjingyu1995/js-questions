import questionsJSON from '../../../data/questions.json';
import Question from '@/components/question/question';
import { QuestionData } from '@/models/Question';
import generateHtmlForOptions from '@/lib/generateHtmlForOptions';
import { Code } from 'bright';

export default async function QuestionPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const questionId = id ? parseInt(id) : null;

  if (!questionId) {
    throw new Error(`Invalid Question id: ${id}`);
  }
  const question = questionsJSON[questionId] as QuestionData;

  if (!question) {
    return <div>Loading...</div>;
  }

  const { options, questionCode } = question;

  const optionsWithHTML = await generateHtmlForOptions(options);

  return (
    <section className='flex h-screen items-center justify-center'>
      <Question question={{ ...question, optionsWithHTML }}>
        <Code lang='js'>{questionCode}</Code>
      </Question>
    </section>
  );
}
