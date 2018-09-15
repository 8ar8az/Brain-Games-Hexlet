import { getRandomNumber } from '../generators';
import gameEngine from '..';

const description = 'Is the number prime?';

const maxOfPossibleNumbers = 100;

const isPrime = (num) => {
  const iter = (supposedDivisor) => {
    if (supposedDivisor > Math.sqrt(num)) return true;
    if (num % supposedDivisor === 0) return false;
    return iter(supposedDivisor + 1);
  };

  return iter(2);
};

const makeQuestion = () => {
  const number = getRandomNumber(maxOfPossibleNumbers);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const questionText = `Question: ${number}`;
  return { questionText, correctAnswer };
};

const game = { description, makeQuestion };

export default () => gameEngine(game);
