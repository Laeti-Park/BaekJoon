// https://school.programmers.co.kr/learn/courses/30/lessons/181924

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
let queries = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    input = line.split(' ').map(Number);
  } else {
    queries = line.split(' ');
    queries = queries.map(item => {
      return item.split('');
    });
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(input, queries);
  console.log(answer);
});

const solution = (arr, queries) => {
  queries.map(item => {
    let temp;
    temp = arr[Number(item[0])];
    arr[Number(item[0])] = arr[Number(item[1])];
    arr[Number(item[1])] = temp;
  });

  return arr;
};