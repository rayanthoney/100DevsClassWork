const os = require('os');

//platform
console.log(os.platform());
// win32

// CPU Architecture
console.log(os.arch());
// x64

// CPU Core Info
// console.log(os.cpus());
/*
[
  {
    model: 'Intel(R) Core(TM) i7-9700K CPU @ 3.60GHz',
    speed: 3600,
    times: {
      user: 5945328,
      nice: 0,
      sys: 12239031,
      idle: 227603546,
      irq: 5160640
    }
  },.... rest of cores
  
]


*/

// Free memory
console.log(os.freemem());
// 7487283200

// total memory
console.log(os.totalmem());
// 17108189184

//Home dir
console.log(os.homedir());
// C:\Users\ryanm

// uptime
console.log(os.uptime());
// 599060
