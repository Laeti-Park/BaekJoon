// https://school.programmers.co.kr/learn/courses/30/lessons/181943

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  const answer = solution(input);
  console.log(answer);
});

const solution = my_string => {
  let alphabetArray = Array.from({ length: 52 }, () => 0);
  const startCapitals = 'A'.codePointAt();
  const endCapitals = 'Z'.codePointAt();
  const startSmalls = 'a'.codePointAt();
  const endSmalls = 'z'.codePointAt();

  const array = my_string.split('');
  array.map(item => {
    if (item.codePointAt() >= startCapitals && item.codePointAt() <= endCapitals) {
      alphabetArray[item.codePointAt() - startCapitals] += 1;
    } else if (item.codePointAt() >= startSmalls && item.codePointAt() <= endSmalls) {
      alphabetArray[item.codePointAt() - startSmalls + 26] += 1;
    }
  });

  return alphabetArray;
};