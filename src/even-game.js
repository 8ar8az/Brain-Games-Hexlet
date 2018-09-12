import getRandomNumber from './generator';

const description = 'Answer "yes" if number even otherwise answer "no".';

const maxOfPossibleNumbers = 100;

const isEven = num => (num % 2) === 0;

const makeQuestion = () => {
  const number = getRandomNumber(maxOfPossibleNumbers);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const questionText = `Question: ${number}`;
  return { questionText, correctAnswer };
};

export default { description, makeQuestion };
