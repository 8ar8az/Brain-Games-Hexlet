import { getRandomNumber } from '../generators';
import gameEngine from '../engine';

const gameName = 'Brain-GCD';

const description = 'Find the greatest common divisor of given numbers.';

const maxOfPossibleNumbers = 100;

const getGCD = (firstNumber, secondNumber) => {
  if (secondNumber === 0) return firstNumber;
  return getGCD(secondNumber, firstNumber % secondNumber);
};

const makeQuestion = () => {
  const firstNumber = getRandomNumber(maxOfPossibleNumbers);
  const secondNumber = getRandomNumber(maxOfPossibleNumbers);

  const questionText = `Question: ${firstNumber} and ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber);

  return { questionText, correctAnswer };
};

const game = { description, makeQuestion };

export const startGame = () => gameEngine(game);

export default { [gameName]: startGame };
