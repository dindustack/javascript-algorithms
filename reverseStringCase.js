function reverseStringCase(text) {
  let reversedString = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == text[i].toUpperCase()) {
      reversedString.push(text[i].toLowerCase());
    } else {
      reversedString.push(text[i].toUpperCase());
    }
  }

  console.log(reversedString.join(""));
  return reversedString.join("");
}

// Another solution for reversing string cases

function reverseStringCases(text) {
  const reversedString = text
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");

  console.log(reversedString);
  return reversedString;
}

reverseStringCase(
  "CoDe cAnNoT evOlVe iF iT RemAinS stAtiC, eSpEciAllY wHeN pRide aNd sElf-dEfEnSe taKe PrIorIty."
);

reverseStringCases(
  "CoDe cAnNoT evOlVe iF iT RemAinS stAtiC, eSpEciAllY wHeN pRide aNd sElf-dEfEnSe taKe PrIorIty."
);
