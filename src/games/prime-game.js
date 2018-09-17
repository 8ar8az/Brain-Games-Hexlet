import { getRandomNumber } from '../generators';
import gameEngine from '../engine';

const gameName = 'Brain-Prime';

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
  const num = getRandomNumber(maxOfPossibleNumbers);

  const questionText = `Question: ${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return { questionText, correctAnswer };
};

const game = { description, makeQuestion };

export default { [gameName]: () => gameEngine(game) };
