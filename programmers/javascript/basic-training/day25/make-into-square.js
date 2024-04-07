// https://school.programmers.co.kr/learn/courses/30/lessons/181830

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
  arr = line.split(' ');
  arr = arr.map(item => {
    return item.split(',').map(Number);
  });
  rl.close();
}).on('close', () => {
  const answer = solution(arr);
  console.log(answer);
});

const solution = arr => {
  const row = arr.length;
  const col = Math.max(...arr.map(item => item.length));
  const maxLength = Math.max(row, col);

  for (let i = 0; i < maxLength; i++) {
    if (!arr[i]) {
      arr.push([]);
    }

    for (let j = 0; j < maxLength; j++) {
      if (!arr[i][j]) {
        arr[i].push(0);
      }
    }
  }

  return arr;
};