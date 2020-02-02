const formatString = function(string) {
  for (const str of string) {
    const result = string.length > 40 ? `${string.slice(0, 41)}...` : string;
    return result;
  }
};

//Вызов
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.')); // вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
); // вернется форматированная строка
