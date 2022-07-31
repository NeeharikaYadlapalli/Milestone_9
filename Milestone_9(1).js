const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};
var f = n => (n > 50 ? false : [-n, n + 10]);
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);

console.log(animals);

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
