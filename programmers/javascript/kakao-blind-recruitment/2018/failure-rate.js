// https://school.programmers.co.kr/learn/courses/30/lessons/42889

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let input = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    n = line;
  } else {
    input = line.split(' ').map(Number);
  }
  count++;

  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(n, input);
  console.log(answer);
});

const solution = (N, stages) => {
  const userCleared = {};
  const userFailed = {};
  const failureRate = {};

  for (let i = 1; i <= N; i++) {
    userCleared[i] = 0;
    userFailed[i] = 0;
  }

  stages.map((stage) => {
    for (let i = 1; i <= stage; i++) {
      userCleared[i] += 1;
    }
    userFailed[stage] += 1;
  });

  for (let key in userFailed) {
    failureRate[key] = userFailed[key] / userCleared[key];
  }
  delete failureRate[N + 1];

  let sortedKeys = Object.keys(failureRate).sort(
    (a, b) => failureRate[b] - failureRate[a],
  );
  return sortedKeys.map(Number);
};
