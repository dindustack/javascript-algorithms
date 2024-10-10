// 1st Method
function findMaxNumber(numbers) {
  //Initializes result to track the maximum number, starting at 0.
  let result = 0;

  //Stores the length of the numbers array for use in the loop.
  const numbersLength = numbers.length;

  //Check if the array is not empty before processing it.
  if (numbersLength > 0) {
    //Loops through each number in the array.
    for (let i = 0; i < numbersLength; i++) {
      //Compare each number to the result to check if it's larger.
      if (numbers[i] > result) {
        //Updates result with the current number if it's the largest
        result = numbers[i];
      }
    }
    return result;
  }

  return result;
}

// 2nd Method
function findMaxNumber(numbers) {
  const maxNumber = Math.max(numbers);
  return maxNumber;
}

console.log(findMaxNumber([5, 33, 47, 103]));
