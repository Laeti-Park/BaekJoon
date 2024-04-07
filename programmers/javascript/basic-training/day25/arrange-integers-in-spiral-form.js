// https://school.programmers.co.kr/learn/courses/30/lessons/181832

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = [];

rl.on('line', (line) => {
  n = Number(line);
  rl.close();
}).on('close', () => {
  const answer = solution(n);
  console.log(answer);
});

const solution = n => {
  const answer =
    new Array(n)
      .fill(null)
      .map(() =>
        new Array(n).fill(0),
      );

  let x = 0;
  let y = 0;
  let min = 0;
  let max = n;

  for (let i = 0; i < n ** 2; i++) {
    answer[x][y] = i + 1;
    if (x === min && y !== max - 1) {
      y += 1;
    } else if (y === max - 1 && x < max - 1) {
      x += 1;
    } else if (x === max - 1 && y > min) {
      y -= 1;
    } else if (x === max - 1 && y === min) {
      max -= 1;
      min += 1;
      x -= 1;
    } else if (x > min && y === min - 1) {
      x -= 1;
    }
  }

  return answer;
};