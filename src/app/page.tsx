import Questions from '@/components/questions';
import questionsJSON from '../data/questions.json';
import { QuestionData } from '@/models/Question';

export default function Home() {
  const questions = questionsJSON as QuestionData[];
  return (
    <main className=''>
      <Questions questions={questions} />
    </main>
  );
}
