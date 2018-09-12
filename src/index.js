import * as UI from './ui';

const questionsCountForWin = 3;

const makeIntroduce = (gameDescription) => {
  UI.welcome();
  UI.showDescription(gameDescription);

  const username = UI.getUserName();
  UI.greeting(username);

  return username;
};

export default ({ description, makeQuestion }) => {
  const username = makeIntroduce(description);

  const askQuestion = (correctQuestionsCount) => {
    if (correctQuestionsCount === questionsCountForWin) {
      UI.showWinningMessage(username);
      return;
    }

    const { questionText, correctAnswer } = makeQuestion(correctQuestionsCount);
    UI.showQuestion(questionText);
    const userAnswer = UI.getAnswer();

    if (String(correctAnswer) !== userAnswer) {
      UI.showLosingMessage(username, correctAnswer, userAnswer);
      return;
    }

    UI.showCorrectMessage();
    askQuestion(correctQuestionsCount + 1);
  };

  askQuestion(0);
};
