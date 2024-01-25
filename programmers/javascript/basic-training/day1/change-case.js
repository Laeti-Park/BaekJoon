// https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

let input = [];

rl.on('line', line => {
  input = [line];
  rl.close();
}).on('close', () => {
  const str = input[0];
  const small = 'a'.codePointAt(0);
  const diff = 'a'.codePointAt(0) - 'A'.codePointAt(0); // 32
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i].codePointAt(0);
    if (char < small) { // 대문자인 경우
      result += String.fromCodePoint(char + diff);
    } else { // 소문자인 경우
      result += String.fromCodePoint(char - diff);
    }
  }

  console.log(result);
});