function countStringOccurrences(str) {
  let occurrence = {};

  Array.from(str).forEach((char) => {
    let currentCount = occurrence[char] || 0;
    occurrence[char] = currentCount + 1;
  });

  console.log(occurrence);
  return occurrence;
}

countStringOccurrences("hello");
countStringOccurrences("👍😉😉👍");
