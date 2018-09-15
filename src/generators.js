const getRandomNumber = (max) => {
  const number = Math.floor(Math.random() * max);
  if (number === 0) return getRandomNumber(max);
  return number;
};

const getRandomProgression = (maxOfStartNumber, maxOfDifference, length) => {
  const startNumber = getRandomNumber(maxOfStartNumber);
  const difference = getRandomNumber(maxOfDifference);

  const makeProgression = (acc) => {
    if (acc.length === length) return acc;

    const [lastElement] = acc.slice().reverse();
    const newLastElement = lastElement + difference;

    return makeProgression([...acc, newLastElement]);
  };

  return makeProgression([startNumber]);
};

export { getRandomNumber, getRandomProgression };
