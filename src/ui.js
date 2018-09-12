import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

const getUserName = () => {
  const username = readlineSync.question('May I have your name?\n');
  return username;
};

const greeting = (username) => {
  console.log(`Hello, ${username}! Let's start!\n`);
};

const showDescription = (description) => {
  console.log(`${description}\n`);
};

const showQuestion = (questionText) => {
  console.log(questionText);
};

const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const showCorrectMessage = () => {
  console.log('Correct!\n');
};

const showWinningMessage = (username) => {
  console.log(`Congratulations, ${username}!`);
};

const showLosingMessage = (username, correctAnswer, userAnswer) => {
  console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${username}`);
};

export {
  welcome,
  getUserName,
  greeting,
  showDescription,
  showQuestion,
  getAnswer,
  showCorrectMessage,
  showWinningMessage,
  showLosingMessage,
};
