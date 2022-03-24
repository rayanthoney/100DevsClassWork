//Create a stopwatch object that has four properties and three methods
const stopwatch = {
  time: 12,
  color: 'blue',
  buttons: ['start', 'reset', 'stop'],
  brand: 'Pro Survivor',
  currentTime: function () {
    console.log(`The current time is: ${this.time}`);
  },
  currentColor: function () {
    console.log(`The stopwatch color is: ${this.color}`);
  },
  totalButtons: function () {
    console.log(`There are ${this.buttons.length} on this stopwatch`);
  },
};

stopwatch.currentTime();
stopwatch.currentColor();
stopwatch.totalButtons();
