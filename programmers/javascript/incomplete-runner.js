// https://school.programmers.co.kr/learn/courses/30/lessons/42576

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

let input = [];
let count = 0;

rl.on('line', line => {
  input.push(line.split(' '));
  count++;

  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(input[0], input[1]);
  console.log(answer);
});

const solution = (participant, completion) => {
  const people = {};
  participant.map(person => people[person] = (people[person] || 0) + 1);
  completion.map(person => people[person] = people[person] - 1);

  return Object.keys(people).filter(key => people[key] >= 1)[0];
};