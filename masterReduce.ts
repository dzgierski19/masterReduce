const data = [5, 23, 5.5, 688];

const mapFn = <T, K>(
  array: T[],
  callback: (element: T, index: number) => T
): (T | K)[] => {
  return array.reduce(
    (accumulator: (T | K)[], currentValue: T, currentIndex: number) => {
      accumulator.push(callback(currentValue, currentIndex));
      return accumulator;
    },
    []
  );
};

console.log(mapFn(data, (element) => element / 2));

const filterFn = <T>(
  array: T[],
  callback: (element: T, index: number) => boolean
): T[] => {
  return array.reduce(
    (accumulator: T[], currentValue: T, currentIndex: number) => {
      if (callback(currentValue, currentIndex)) {
        accumulator.push(currentValue);
      }
      return accumulator;
    },
    []
  );
};

console.log(filterFn(data, (element) => element < 24));

console.log("every");

const everyFn = <T>(
  array: T[],
  callback: (element: T, index: number) => boolean
): boolean => {
  return array.reduce(
    (accumulator: boolean, currentValue: T, currentIndex: number) => {
      if (callback(currentValue, currentIndex)) {
        return accumulator;
      }
      return false;
    },
    true
  );
};

console.log(everyFn(data, (element) => element < 65));

console.log("some");

const someFn = <T>(
  array: T[],
  callback: (element: T, index: number) => boolean
): boolean => {
  return array.reduce(
    (accumulator: boolean, currentValue: T, currentIndex: number) => {
      if (!callback(currentValue, currentIndex)) {
        return accumulator;
      }
      return true;
    },
    false
  );
};

console.log(someFn(data, (element) => element > 650));
