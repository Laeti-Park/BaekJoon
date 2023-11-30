// https://school.programmers.co.kr/learn/courses/30/lessons/42840

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

const solution = (answers) => {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const correct = { 1: 0, 2: 0, 3: 0 };

  answers.map((question, index) => {
    correct[1] += question === student1[index % 5] ? 1 : 0;
    correct[2] += question === student2[index % 8] ? 1 : 0;
    correct[3] += question === student3[index % 10] ? 1 : 0;
  });

  const maxNumber = Math.max(...Object.values(correct));

  return (Object.keys(correct).filter(key => correct[key] === maxNumber)).map(Number);
};