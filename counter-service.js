let counter = 0;

setInterval(() => {
  counter++;
  console.log(`Counter value: ${counter}`);
}, 60000);

module.exports = {
  getCounter: () => counter
};
