import getRandomNumber from '../generator';
import gameEngine from '..';

const description = 'Balance the given number.';

const maxOfPossibleNumbers = 9999;

const makeBalancedNumber = (number) => {
  const sortedArrayNumbers = number.split('').sort();
  const first = Number(sortedArrayNumbers.shift());
  const last = Number(sortedArrayNumbers.pop());

  if ((last - first) > 1) {
    return makeBalancedNumber([first + 1, ...sortedArrayNumbers, last - 1].join(''));
  }
  return [first, ...sortedArrayNumbers, last].join('');
};

const makeQuestion = () => {
  const number = String(getRandomNumber(maxOfPossibleNumbers));

  const questionText = `Question: ${number}`;
  const correctAnswer = makeBalancedNumber(number);

  return { questionText, correctAnswer };
};

const game = { makeQuestion, description };

export default () => gameEngine(game);
