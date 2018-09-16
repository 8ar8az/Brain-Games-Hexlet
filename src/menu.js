import builtInGames from './games';
import * as UI from './ui';

export default (customGames = {}, useBuiltInGames = true) => {
  const allGames = useBuiltInGames ? { ...builtInGames, ...customGames } : { ...customGames };

  const gamesNames = Object.keys(allGames);
  const userChoice = UI.chooseGame(gamesNames);

  if (userChoice === 'Exit') {
    UI.sayGoodbye();
    return;
  }
  allGames[userChoice]();
};
