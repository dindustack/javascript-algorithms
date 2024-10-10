function camelToCase(text) {
  // Transform each uppercase letter (character) based on its position.
  function upperToUnderScoreLower(character, position) {
    // If the letter isn't the first character, add an underscore and convert it to lowercase.
    return (position > 0 && "_") + character.toLowerCase();
  }

  // Replace all uppercase letters in (text) by calling the upperToUnderScoreLower function.
  return text.replace(/[A-Z]/g, upperToUnderScoreLower);
}

console.log(camelToCase("camelToCase"));
