const numbers = [
  ["0", "zero"],
  ["1", "one"],
  ["2", "two"],
  ["3", "three"],
  ["4", "four"],
  ["5", "five"],
];

const stringFromNumber = (num) => {
  if (num >= 0 && num <= 5) {
    const getIndex = numbers[num];
    return console.log(getIndex[1]);
  }

  return console.log(`The number '${num}' is out of range`);
};

stringFromNumber(0);
stringFromNumber(1);
stringFromNumber(2);
stringFromNumber(3);
stringFromNumber(4);
stringFromNumber(5);
stringFromNumber(-1);
stringFromNumber(6);
