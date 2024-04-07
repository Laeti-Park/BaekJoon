// https://school.programmers.co.kr/learn/courses/30/lessons/181859

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
  arr = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(arr);
  console.log(answer);
});

const solution = arr => {
  let answer = [arr[0]];
  let number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    } else {
      answer.splice(answer.length - 1, answer.length);
    }

    number = arr[i];
  }

  return answer.length === 0 ? [-1] : answer;
};