const crypto = require("crypto");
// const hexToBinary = require('hex-to-binary');
const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256");
  hash.update(inputs.join(""));
  // return hexToBinary(hash.digest("hex"));
  return hash.digest("hex");
};

// result = cryptoHash("hello","hello");
// console.log(result);
module.exports = cryptoHash;
