import builtInGames from './games';
import * as UI from './ui';

const getUserMenuChoice = (menuItems) => {
  const namesMenuItems = Object.keys(menuItems);
  const userChoice = UI.getSelectedMenuItem(namesMenuItems);
  return menuItems[userChoice];
};

const doesUserWantToRepeat = () => UI.getUserWishToRepeat();

const exiting = () => {
  UI.sayGoodbye();
  process.exit();
};

const controlMenu = (customGames = {}, useBuiltInGames = true) => {
  const makeListOfMenuItems = () => {
    const gamesItems = useBuiltInGames ? { ...builtInGames, ...customGames } : customGames;
    const exitItem = { EXIT: exiting };
    return { ...gamesItems, ...exitItem };
  };

  const userChoice = getUserMenuChoice(makeListOfMenuItems());

  userChoice();

  if (!doesUserWantToRepeat()) {
    exiting();
  }

  controlMenu(customGames, useBuiltInGames);
};

export default controlMenu;
