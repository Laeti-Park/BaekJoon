// https://school.programmers.co.kr/learn/courses/30/lessons/81301

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  const answer = solution(input);
  console.log(answer);
});

const solution = (s) => {
  const numberArray = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let answer = s;

  numberArray.map((num, index) => {
    const regex = new RegExp(num, 'g');
    answer = answer.replace(regex, index);
  });

  return parseInt(answer);
};
