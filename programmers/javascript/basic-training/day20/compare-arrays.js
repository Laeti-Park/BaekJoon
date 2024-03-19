// https://school.programmers.co.kr/learn/courses/30/lessons/181856

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr1 = [];
let arr2 = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    arr1 = line.split(' ').map(Number);
  } else {
    arr2 = line.split(' ').map(Number);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(arr1, arr2);
  console.log(answer);
});

const solution = (arr1, arr2) => {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else {
    const arr1Sum = arr1.reduce((acc, cur) => acc + cur, 0);
    const arr2Sum = arr2.reduce((acc, cur) => acc + cur, 0);
    if (arr1Sum > arr2Sum) {
      return 1;
    } else if (arr1Sum < arr2Sum) {
      return -1;
    } else {
      return 0;
    }
  }
};