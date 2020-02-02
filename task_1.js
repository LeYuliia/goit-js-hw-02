const logItems = function(array) {
  for (let i = 0; i < logItems.length; i += 1)
    for (const item of array) {
      console.log(`${(i = i + 1)} - ${item}`);
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
