// https://school.programmers.co.kr/learn/courses/30/lessons/17681

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let arr1 = [];
let arr2 = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    n = line;
  } else if  (count === 1) {
    arr1 = line.split(' ').map(Number);
  } else {
    arr2 = line.split(' ').map(Number);
  }
  count++;

  if (count > 2) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(n, arr1, arr2);
  console.log(answer);
});

const solution = (n, arr1, arr2) => {
  const answer = [];

  arr1.map((num, index) => {
    let binaryString1 = num.toString(2);
    let binaryString2 = arr2[index].toString(2);
    let result = '';

    while (binaryString1.length < n) {
      binaryString1 = '0' + binaryString1;
    }
    while (binaryString2.length < n) {
      binaryString2 = '0' + binaryString2;
    }

    let binaryArray1 = binaryString1.split('');
    let binaryArray2 = binaryString2.split('');

    for (let i = 0; i < binaryArray1.length; i++) {
      if (binaryArray1[i] === '1' || binaryArray2[i] === '1') {
        result += '#';
      } else {
        result += ' ';
      }
    }

    answer.push(result);
  });

  return answer;
};
