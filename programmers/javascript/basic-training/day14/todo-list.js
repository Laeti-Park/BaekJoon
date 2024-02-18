// https://school.programmers.co.kr/learn/courses/30/lessons/181886

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todo_list = [];
let finished = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    todo_list = line.split(' ');
  } else {
    finished = line.split(' ').map(Number).map(item => item === 1);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(todo_list, finished);
  console.log(answer);
});

const solution = (todo_list, finished) => {
  let answer = [];
  for (let i = 0; i < todo_list.length; i++) {
    if (!finished[i]) {
      answer.push(todo_list[i]);
    }
  }
  return answer;
};