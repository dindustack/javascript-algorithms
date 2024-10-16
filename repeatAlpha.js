const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

const upperAlpha = range("A".charCodeAt(0), "Z".charCodeAt(0) + 1, 1).map((x) =>
  String.fromCharCode(x)
);

const lowerAlpha = range("a".charCodeAt(0), "z".charCodeAt(0) + 1, 1).map((x) =>
  String.fromCharCode(x)
);

function getAlphaIndex(char) {
  if (char === char.toUpperCase()) {
    return upperAlpha.indexOf(char) + 1;
  }

  if (char === char.toLowerCase()) {
    return lowerAlpha.indexOf(char) + 1;
  }
}

function repeatAlpha(text) {
  let occurrence = [];

  Array.from(text).forEach((char) => {
    let count = getAlphaIndex(char);
    let result = Array(count).fill(char).join("");
    occurrence.push(result);
  });

  return occurrence.join("");
}

console.log(repeatAlpha("Becky"));
console.log(repeatAlpha("neNgi"));
console.log(repeatAlpha("ChInwendu"));
console.log(repeatAlpha("dindustack"));
