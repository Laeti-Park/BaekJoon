// https://school.programmers.co.kr/learn/courses/30/lessons/181829

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let board = [];
let k = 0;
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    board = line.split(' ');
    board = board.map(item => {
      return item.split(',').map(Number);
    });
  } else {
    k = Number(line);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(board, k);
  console.log(answer);
});

const solution = (board, k) => {
  let sum = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        sum += board[i][j];
      }
    }
  }

  return sum;
};