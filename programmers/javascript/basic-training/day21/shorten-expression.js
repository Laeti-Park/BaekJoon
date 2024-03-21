// https://school.programmers.co.kr/learn/courses/30/lessons/181851

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let rank = [];
let attendance = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    rank = line.split(' ').map(Number);
  } else {
    attendance = line.split(' ').map(Number).map(item => item === 1);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(rank, attendance);
  console.log(answer);
});

const solution = (rank, attendance) => {
  const filterArray = rank
    .filter((item, index) => attendance[index])
    .sort((a, b) => a - b)
    .filter((item, index) => index < 3);

  const filterStudents = rank
    .filter(item => filterArray.includes(item))
    .sort((a, b) => a - b);

  let arr = [];
  for (let i = 0; i < filterStudents.length; i++) {
    arr.push(rank.indexOf(filterStudents[i]));
  }

  return (10000 * arr[0]) + (100 * arr[1]) + arr[2];
};