function addPrimeSum(number) {
  let result = 0;

  function isPrime(num) {
    if (num < 2) return;

    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) return;
    }
    return num;
  }

  while (number > 1) {
    if (isPrime(number)) {
      result += number;
    }
    number--;
  }

  return result;
}

console.log(addPrimeSum(5));
console.log(addPrimeSum(21));
console.log(addPrimeSum(100));
console.log(addPrimeSum(239));
console.log(addPrimeSum(956));
