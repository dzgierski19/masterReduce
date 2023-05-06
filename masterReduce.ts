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

const mapFn = <T>(array: T[], callback: (element: T, index: number) => T) => {
  const newEmptyArray: T[] = [];
  array.reduce((accumulator: T, currentValue: T, currentIndex: number) => {
    accumulator = callback(currentValue, currentIndex);
    newEmptyArray.push(accumulator);
    return accumulator;
  }, array[0]);
  return newEmptyArray;
};

console.log(mapFn(data, (element) => element / 2));

// const filterFn = (array, callback) => {}

// const everyFn = (array, callback) => {}

// const someFn = (array, callback) => {}
