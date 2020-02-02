const checkForSpam = function(message) {
  for (const word of message) {
    message = message.toLowerCase();
    const result = message.includes('spam') || message.includes('sale');
    return result;
  }
};

//ВЫзов
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
