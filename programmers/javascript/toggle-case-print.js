// https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

let input = [];

rl.on('line', line => {
  input = [line];
}).on('close', () => {
  const str = input[0];
  const small = 'a'.codePointAt();
  const diff = 'a'.codePointAt() - 'A'.codePointAt();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i].codePointAt();
    if (char < small) {
      result += String.fromCodePoint(char + diff);
    } else {
      result += String.fromCodePoint(char - diff);
    }
  }

  console.log(result);
});