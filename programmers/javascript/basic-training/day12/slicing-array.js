// https://school.programmers.co.kr/learn/courses/30/lessons/181893

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let query = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    arr = line.split(' ').map(Number);
  } else {
    query = line.split(' ').map(Number);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(arr, query);
  console.log(answer);
});

const solution = (arr, query) => {
  let answer = arr;
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      answer = answer.slice(0, query[i] + 1);
    } else {
      answer = answer.slice(query[i]);
    }
  }

  return answer;
};