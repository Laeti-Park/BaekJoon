// https://school.programmers.co.kr/learn/courses/30/lessons/181932

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
let booleanArray = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    input = line.split(' ').map(Number);
  } else {
    booleanArray = (line.split(' ')).map(item => Number(item) === 1);
  }
  count++;

  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(input[0], input[1], booleanArray);
  console.log(answer);
});

const solution = (a, d, included) => {
  let answer = 0;
  included.map((item, index) => {
    if (item) {
      answer += a + (d * (index));
    }
  });

  return answer;
};