import readlineSync from 'readline-sync';

const presentGame = (description) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${description}\n`);
};

const getUsername = () => {
  const username = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${username}! Let's start!\n`);
  return username;
};

const askQuestionAndGetAnswer = (questionText) => {
  console.log(questionText);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const showCorrectMessage = () => {
  console.log('Correct!\n');
};

const showWinningMessage = (username) => {
  console.log(`Congratulations, ${username}!\n`);
};

const showLoosingMessage = (username, correctAnswer, userAnswer) => {
  console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${username}\n`);
};

const getSelectedMenuItem = (menuItems) => {
  console.log('\nWhat kind of game do you want to play?');
  const index = readlineSync.keyInSelect(menuItems, 'Your choice?',
    { cancel: false });
  return menuItems[index];
};

const sayGoodbye = () => {
  console.log('Bye-bye! See you later!');
};

const getUserWishToRepeat = () => readlineSync.keyInYN('Do you want to gaming more once?');

export {
  presentGame,
  getUsername,
  askQuestionAndGetAnswer,
  showCorrectMessage,
  showWinningMessage,
  showLoosingMessage,
  getSelectedMenuItem,
  sayGoodbye,
  getUserWishToRepeat,
};
