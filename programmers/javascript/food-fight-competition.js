// https://school.programmers.co.kr/learn/courses/30/lessons/134240

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(input);
  console.log(answer);
});

const solution = food => {
  let answer = '';
  food.map((item, index) => {
    if (index > 0 && item % 2 === 1) {
      food[index] = item - 1;
    }
  });

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < food[i] / 2; j++) {
      answer += i;
    }
  }
  answer += '0';
  for (let i = food.length - 1; i > 0; i--) {
    for (let j = 0; j < food[i] / 2; j++) {
      answer += i;
    }
  }

  return answer;
};