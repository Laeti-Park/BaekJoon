// https://school.programmers.co.kr/learn/courses/30/lessons/181897

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = '';
let slicer = [];
let num_list = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    n = Number(line);
  } else if (count === 1){
    slicer = line.split(' ').map(Number)
  } else {
    num_list = line.split(' ').map(Number);
  }
  count++;
  if (count > 2) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(n, slicer, num_list);
  console.log(answer);
});

const solution = (n, slicer, num_list) => {
  switch (n) {
    case 1:
      return num_list.slice(0, slicer[1]+1);
    case 2:
      return num_list.slice(slicer[0]);
    case 3:
      return num_list.slice(slicer[0], slicer[1]+1);
    case 4:
      const list = num_list.slice(slicer[0], slicer[1]+1);
      return list.filter((_, index) => index % slicer[2] === 0)
  }
};