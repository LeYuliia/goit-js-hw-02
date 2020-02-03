let input;
const numbers = [];
let total = 0;
while (true) {
  input = prompt('Введите число');
  if (input === null) {
    break;
  }
  input = Number(input);
  numbers.push(input);
}
for (const number of numbers) {
  if (numbers.length>0){
  total += number;
  }
}
console.log(`Общая сумма чисел равна ${total}`);
console.log(numbers);
