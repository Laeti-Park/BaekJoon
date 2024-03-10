// https://school.programmers.co.kr/learn/courses/30/lessons/181879

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = '';

rl.on('line', (line) => {
  arr = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(arr);
  console.log(answer);
});

const solution = num_list => {
  let answer = 0;
  if (num_list.length > 10) {
    for (const num of num_list) {
      answer += num;
    }
  } else {
    answer = 1;
    for (const num of num_list) {
      answer *= num;
    }
  }

  return answer;
};