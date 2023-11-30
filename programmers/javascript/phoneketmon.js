// https://school.programmers.co.kr/learn/courses/30/lessons/1845

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

let input = [];

rl.on('line', line => {
  input = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(input);
  console.log(answer);
});

const solution = (nums) => {
  const set = [...new Set(nums)];
  return set.length >= (nums.length / 2) ? nums.length / 2 : [...new Set(nums)].length;
};