// https://school.programmers.co.kr/learn/courses/30/lessons/181865

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let binomial = '';

rl.on('line', (line) => {
  binomial = line;
  rl.close();
}).on('close', () => {
  const answer = solution(binomial);
  console.log(answer);
});

const solution = binomial => {
  const calcString = binomial.split(' ');
  if (calcString[1] === '+') {
    return parseInt(calcString[0]) + parseInt(calcString[2]);
  } else if (calcString[1] === '-') {
    return parseInt(calcString[0]) - parseInt(calcString[2]);
  } else if (calcString[1] === '*') {
    return parseInt(calcString[0]) * parseInt(calcString[2]);
  } else if (calcString[1] === '/')
    return parseInt(calcString[0]) / parseInt(calcString[2]);
};