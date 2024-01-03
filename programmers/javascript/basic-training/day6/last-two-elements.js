// https://school.programmers.co.kr/learn/courses/30/lessons/181927

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

const solution = num_list => {
  let answer = num_list;
  const len = num_list.length;
  answer.push(num_list[len - 1] > num_list[len - 2] ? num_list[len - 1] - num_list[len - 2] : num_list[len - 1] * 2);
  return answer;
};