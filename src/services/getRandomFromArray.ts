const shuffleArray = <T>(array: T[]): T[] => {
  const clone = array.slice();
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = clone[i];
    clone[i] = clone[j];
    clone[j] = temp;
  }
  return clone;
};

export default <T>(array: T[], count: number): T[] => {
  return shuffleArray<T>(array).slice(0, count);
};
