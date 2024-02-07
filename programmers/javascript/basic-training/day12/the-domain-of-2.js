// https://school.programmers.co.kr/learn/courses/30/lessons/181894

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
  const answer = solution(input);
  console.log(answer);
});

const solution = arr => {
  const start = arr.indexOf(2);
  if (start !== -1) {
    const end = (arr.reverse()).indexOf(2);

    return arr.reverse().slice(start, arr.length - end);
  }

  return [-1];
};