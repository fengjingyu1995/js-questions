import { QuestionData } from '@/models/Question';
import Question from './question';

interface QuestionsProps {
  questions: QuestionData[];
}

export const Questions: React.FC<QuestionsProps> = ({ questions }) => {
  const currentQuestion = questions[0];

  return (
    <section className='flex h-screen items-center justify-center'>
      <Question question={currentQuestion} />
    </section>
  );
};

export default Questions;
