import { getRandomNumber, getRandomProgression } from '../generators';
import gameEngine from '../engine';

const gameName = 'Brain-Progression';

const description = 'What number is missing in progression?';

const progressionLength = 10;
const maxOfStartNumber = 20;
const maxOfProgressionDifference = 20;

const makeQuestion = () => {
  const progression = getRandomProgression(maxOfStartNumber,
    maxOfProgressionDifference,
    progressionLength);

  const indexOfReplacedElement = getRandomNumber(progressionLength);

  const correctAnswer = progression[indexOfReplacedElement];
  progression[indexOfReplacedElement] = '..';
  const questionText = `Question: ${progression.join('  ')}`;

  return { questionText, correctAnswer };
};

const game = { description, makeQuestion };

export default { [gameName]: () => gameEngine(game) };
