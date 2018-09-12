import getRandomNumber from '../generator';

const description = 'What is the result of the expression?';

const possibleOperations = ['+', '-', '*'];

const maxOfPossibleNumbersForSumOrDif = 100;
const maxOfPossibleNumbersForProduct = 10;

const questionForOperationType = {
  '+': () => {
    const firstNumber = getRandomNumber(maxOfPossibleNumbersForSumOrDif);
    const secondNumber = getRandomNumber(maxOfPossibleNumbersForSumOrDif);

    const questionText = `Question: ${firstNumber} + ${secondNumber}`;
    const correctAnswer = firstNumber + secondNumber;
    return { questionText, correctAnswer };
  },
  '-': () => {
    const firstNumber = getRandomNumber(maxOfPossibleNumbersForSumOrDif);
    const secondNumber = getRandomNumber(maxOfPossibleNumbersForSumOrDif);

    const numbers = [firstNumber, secondNumber].sort();

    const questionText = `Question: ${numbers[1]} - ${numbers[0]}`;
    const correctAnswer = numbers[1] - numbers[0];
    return { questionText, correctAnswer };
  },
  '*': () => {
    const firstNumber = getRandomNumber(maxOfPossibleNumbersForProduct);
    const secondNumber = getRandomNumber(maxOfPossibleNumbersForProduct);

    const questionText = `Question: ${firstNumber} * ${secondNumber}`;
    const correctAnswer = firstNumber * secondNumber;
    return { questionText, correctAnswer };
  },
};

const makeQuestion = (countQuestion) => {
  const currentOperation = possibleOperations[countQuestion % possibleOperations.length];
  return questionForOperationType[currentOperation]();
};

export default { description, makeQuestion };
