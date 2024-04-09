// https://school.programmers.co.kr/learn/courses/30/lessons/17682

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dartResult = 0;

rl.on('line', (line) => {
  dartResult = line;
  rl.close();
}).on('close', () => {
  const answer = solution(dartResult);
  console.log(answer);
});

const solution = dartResult => {
  const regex = /(\d+)([SDT])([*#]?)/g;
  const bonus = { S: 1, D: 2, T: 3 };
  const scores = dartResult.match(regex);
  let stack = [];

  for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let number = parseInt(score.match(/\d+/)[0]);
    let bonusType = score.match(/[SDT]/)[0];
    let option = score.match(/[*#]/);
    let currentScore = Math.pow(number, bonus[bonusType]);

    if (option) {
      if (option[0] === '*') {
        currentScore *= 2;
        if (stack.length > 0) {
          stack[stack.length - 1] *= 2;
        }
      } else {
        currentScore *= -1;
      }
    }

    stack.push(currentScore);
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
};