const Blockchain = require("./blockchain");
const blockchain = new Blockchain();
blockchain.addBlock({ data: "MOHIT" });
let prevTimeStamp, nextTimeStamp, nextBlock, timeDiff, averageTime;
const times = [];
for (let i = 1; i < 100; i++) {
  prevTimeStamp = blockchain.chain[blockchain.chain.length - 1].timestamp;
  blockchain.addBlock({ data: `block${i}` });
  nextBlock = blockchain.chain[blockchain.chain.length - 1];
  nextTimeStamp = nextBlock.timestamp;
  timeDiff = nextTimeStamp - prevTimeStamp;
  times.push(timeDiff);
  averageTime = times.reduce((total, num) => total + num) / times.length;
  console.log(
    `Time to mine Block ${timeDiff} ms ,Difficulty ${nextBlock.difficulty}, Average Time ${averageTime} ms`
  );
}
