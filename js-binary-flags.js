// @ts-check

const binaryFlag__A = 1 << 0; // 1
const binaryFlag__B = 1 << 1; // 2
const binaryFlag__C = 1 << 2; // 4
const binaryFlag__D = 1 << 3; // 8
const binaryFlag__E = 1 << 4; // 16

// initial state
let myState = binaryFlag__A | binaryFlag__E; // 10001
pp(myState);

// set F to 1
myState = toTrue(myState, binaryFlag__B); // 10011
pp(myState);

// set A to 0
myState = toFalse(myState, binaryFlag__A); // 10010
pp(myState);

const isFlagB_inMyState = isFalse(myState, binaryFlag__B);
console.log(isFlagB_inMyState);

function toTrue(state, binaryFlag) {
  return state | binaryFlag;
}

function toFalse(state, binaryFlag) {
  return state & ~binaryFlag;
}

function isTrue(state, binaryFlag) {
  return !!(state & binaryFlag);
}

function isFalse(state, binaryFlag) {
  return !(state & binaryFlag);
}

// utils

/**
 * @param {number} state
 */
function pp(state) {
  console.log(numberToBitesString(state));
}

/**
 * @param {number} dec
 */
function numberToBitesString(dec) {
  return (dec >>> 0).toString(2);
}
