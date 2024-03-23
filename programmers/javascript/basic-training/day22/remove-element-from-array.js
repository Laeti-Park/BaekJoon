// https://school.programmers.co.kr/learn/courses/30/lessons/181844

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let deleteList = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    arr = line.split(' ').map(Number);
  } else {
    deleteList = line.split(' ').map(Number);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(arr, deleteList);
  console.log(answer);
});

const solution = (arr, deleteList) => {
  return arr.filter((num) => !deleteList.includes(num));
};