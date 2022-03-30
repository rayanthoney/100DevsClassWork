'use strict';

// properties: duration
// methods: reset,start,stop
// start will start the timer
// stop will stop it
// start again will continue the time

function Stopwatch() {
  let onSwitch = 0;
  let currentTime = {
    timestamp: 0,
    watchTime: 0,
  };

  this.duration = 0;
  this.start = function () {
    if (onSwitch === 1) throw new Error('Stopwatch has already started');
    currentTime.timestamp = Date.now();
    onSwitch = 1;
  };
  this.stop = function () {
    if (onSwitch === 0) throw new Error('Stopwatch is not started');

    let formatSeconds = (Date.now() - currentTime.timestamp) / 1000;

    if (currentTime.watchTime !== 0) formatSeconds += currentTime.watchTime;
    this.duration = formatSeconds;
    currentTime.watchTime = formatSeconds;
    onSwitch = 0;
  };
  this.reset = function () {
    this.duration = 0;
    currentTime.watchTime = 0;
  };
}
