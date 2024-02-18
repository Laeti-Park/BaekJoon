// https://school.programmers.co.kr/learn/courses/30/lessons/181916

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(input[0], input[1], input[2], input[3]);
  console.log(answer);
});

const solution = (a, b, c, d) => {
  let obj = {};

  [a, b, c, d].forEach(num => {
    obj[num] = (obj[num] || 0) + 1;
  });
  let entries = Object.entries(obj);
  entries.sort((a, b) => b[1] - a[1]);
  let sortedKeys = entries.map(entry => entry[0]);

  if (obj[sortedKeys[0]] === 4) {
    return Number(sortedKeys[0]) * 1111;
  } else if (obj[sortedKeys[0]] === 3) {
    return (10 * Number(sortedKeys[0]) + Number(sortedKeys[1])) ** 2;
  } else if (obj[sortedKeys[0]] === 2 && sortedKeys.length === 2) {
    return (Number(sortedKeys[0]) + Number(sortedKeys[1])) * Math.abs(Number(sortedKeys[0]) - Number(sortedKeys[1]));
  } else if (obj[sortedKeys[0]] === 2 && sortedKeys.length === 3) {
    return Number(sortedKeys[1]) * Number(sortedKeys[2]);
  } else {
    return Number(sortedKeys.sort((a, b) => a - b)[0]);
  }
};