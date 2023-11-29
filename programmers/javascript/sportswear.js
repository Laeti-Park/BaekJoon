// https://school.programmers.co.kr/learn/courses/30/lessons/42862

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

let input = [];
let count = 0;

rl.on('line', line => {
  input.push(line.split(' ').map(Number));
  count++;

  if (count > 2) {
    rl.close();
  }

}).on('close', () => {
  const answer = solution(input[0], input[1], input[2]);
  console.log(answer);
});

const solution = (n, lost, reserve) => {
  let borrow = lost.filter(item => !reserve.includes(item)).sort();
  let borrowed = reserve.filter(item => !lost.includes(item));

  for (const item of borrow) {
    if (borrowed.includes(item - 1)) {
      borrowed = borrowed.filter(element => element !== item - 1);
      borrow = borrow.filter(element => element !== item);
    } else if (borrowed.includes(item + 1)) {
      borrowed = borrowed.filter(element => element !== item + 1);
      borrow = borrow.filter(element => element !== item);
    }
  }

  return n - borrow.length;
};