function searchAndReplace(text, firstLetter, secondLetter) {
  const replacedString = text
    .split("")
    .map((item) => (item === firstLetter ? secondLetter : item))
    .join("");

  return replacedString;
}

console.log(searchAndReplace("Drastic measures made fast", "a", "o"));
