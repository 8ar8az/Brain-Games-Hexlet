const getRandomNumber = (max) => {
  const number = Math.floor(Math.random() * max);
  if (number === 0) return getRandomNumber(max);
  return number;
};

export default getRandomNumber;
