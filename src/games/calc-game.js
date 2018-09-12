import getRandomNumber from '../generator';
import gameEngine from '..';

const description = 'What is the result of the expression?';

const possibleOperations = ['+', '-', '*'];

const maxOfPossibleNumbersForSumOrDif = 100;
const maxOfPossibleNumbersForProduct = 10;

const maxAndCorrectAnswerForOperationType = {
  '+': {
    max: maxOfPossibleNumbersForSumOrDif,
    getCorrectAnswer: (firstNumber, secondNumber) => firstNumber + secondNumber,
  },
  '-': {
    max: maxOfPossibleNumbersForSumOrDif,
    getCorrectAnswer: (firstNumber, secondNumber) => firstNumber - secondNumber,
  },
  '*': {
    max: maxOfPossibleNumbersForProduct,
    getCorrectAnswer: (firstNumber, secondNumber) => firstNumber * secondNumber,
  },
};

const makeQuestion = (countQuestion) => {
  const currentOperation = possibleOperations[countQuestion % possibleOperations.length];
  const { max, getCorrectAnswer } = maxAndCorrectAnswerForOperationType[currentOperation];

  const [lesserNumber, biggerNumber] = [getRandomNumber(max), getRandomNumber(max)].sort();

  const correctAnswer = getCorrectAnswer(biggerNumber, lesserNumber);
  const questionText = `${biggerNumber} ${currentOperation} ${lesserNumber}`;
  return { questionText, correctAnswer };
};

const game = { description, makeQuestion };

export default () => gameEngine(game);
