const data = [5, 23, 5.5, 688];

const emptyArray: number[] = [];

const arrayReduce = (array: any[]) => {
  data.reduce(
    (accumulator: number, currentValue: number, currentIndex: number) => {
      accumulator = currentValue * 2;
      emptyArray.push(accumulator);
      return accumulator;
    },
    0
  );
  return emptyArray;
};

console.log(arrayReduce(data));

const mapFn = <T>(
  array: T[],
  callback: (element: T, index: number) => T
): T[] => {
  const newEmptyArray: T[] = [];
  array.reduce((accumulator: T, currentValue: T, currentIndex: number) => {
    accumulator = callback(currentValue, currentIndex);
    newEmptyArray.push(accumulator);
    return accumulator;
  }, array[0]);
  return newEmptyArray;
};

console.log(mapFn(data, (element) => element / 2));

const filterFn = <T>(
  array: T[],
  callback: (element: T, index: number) => boolean
): T[] => {
  const newEmptyArray: T[] = [];
  array.reduce((accumulator: T, currentValue: T, currentIndex: number) => {
    if (callback(currentValue, currentIndex)) {
      newEmptyArray.push(currentValue);
    }
    return accumulator;
  }, array[0]);
  return newEmptyArray;
};

console.log(filterFn(data, (element) => element > 6));

const everyFn = <T>(
  array: T[],
  callback: (element: T, index: number) => boolean
): boolean => {
  const newEmptyArray: T[] = [];
  array.reduce((accumulator: T, currentValue: T, currentIndex: number) => {
    if (callback(accumulator, currentIndex)) {
      newEmptyArray.push(accumulator);
    }
  }, array[0]);
  if (newEmptyArray.length === array.length) {
    return true;
  }
  return false;
};

console.log(everyFn(data, (element) => element % 2 === 0));

// const someFn = (array, callback) => {}
