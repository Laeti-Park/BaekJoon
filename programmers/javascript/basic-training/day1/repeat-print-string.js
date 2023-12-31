// https://school.programmers.co.kr/learn/courses/30/lessons/181950

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

let input = [];

rl.on('line', line => {
  input = line.split(' ');
}).on('close', () => {
  const str = input[0];
  const n = Number(input[1]);

  let array = '';
  for (let i = 0; i < n; i++) {
    array += str;
  }
  console.log(array);

  // 또 다른 해답
  // console.log(str.repeat(n));
});