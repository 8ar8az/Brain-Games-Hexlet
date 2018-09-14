import * as UI from './ui';

const countCorrectAnswersForWin = 3;

const isWin = (currentCountCorrectAnswers) => {
  if (currentCountCorrectAnswers === countCorrectAnswersForWin) return true;
  return false;
};

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

export default ({ description, makeQuestion }) => {
  UI.presentGame(description);
  const username = UI.getUsername();

  const playRound = (currentCountCorrectAnswers) => {
    if (isWin(currentCountCorrectAnswers)) {
      UI.showWinningMessage(username);
      return;
    }

    const { questionText, correctAnswer } = makeQuestion(currentCountCorrectAnswers);
    const userAnswer = UI.askQuestionAndGetAnswer(questionText);

    if (!isCorrectAnswer(correctAnswer, userAnswer)) {
      UI.showLoosingMessage(username, correctAnswer, userAnswer);
      return;
    }

    UI.showCorrectMessage();
    playRound(currentCountCorrectAnswers + 1);
  };

  playRound(0);
};
