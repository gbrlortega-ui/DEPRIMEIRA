
import { clinicaQuestions } from './clinica';
import { cirurgiaQuestions } from './cirurgia';
import { pediatriaQuestions } from './pediatria';
import { goQuestions } from './go';
import { preventivaQuestions } from './preventiva';
import { Question } from '../../types';

export const allQuestions: Question[] = [
  ...clinicaQuestions,
  ...cirurgiaQuestions,
  ...pediatriaQuestions,
  ...goQuestions,
  ...preventivaQuestions
];
