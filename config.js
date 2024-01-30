const INITIAL_DIFFICULTY = 2;
const MINE_RATE = 1000; //1s
const GENESIS_DATA = {
  timestamp: 1,
  prevHash: "0x000",
  hash: "0x123",
  difficulty: INITIAL_DIFFICULTY,
  data: [],
  nonce: 0,
};
module.exports = { GENESIS_DATA, MINE_RATE };
