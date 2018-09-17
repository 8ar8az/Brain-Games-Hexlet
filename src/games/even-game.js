import { getRandomNumber } from '../generators';
import gameEngine from '../engine';

const gameName = 'Brain-Even';

const description = 'Answer "yes" if number even otherwise answer "no".';

const maxOfPossibleNumbers = 100;

const isEven = num => (num % 2) === 0;

const makeQuestion = () => {
  const number = getRandomNumber(maxOfPossibleNumbers);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const questionText = `Question: ${number}`;
  return { questionText, correctAnswer };
};

const game = { description, makeQuestion };

export default { [gameName]: () => gameEngine(game) };
