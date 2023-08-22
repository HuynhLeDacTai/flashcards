export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

export const generateArray = (amount) => {
  let pageArray = [];
  for (let i = 1; i <= amount; i++) {
    pageArray = [...pageArray, i];
  }
  return pageArray;
};
