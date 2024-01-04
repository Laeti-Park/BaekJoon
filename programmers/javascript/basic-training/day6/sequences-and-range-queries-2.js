// https://school.programmers.co.kr/learn/courses/30/lessons/181926

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
      return item.split('').map(Number);
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
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    const item = queries[i];
    const temp = arr.slice(item[0], item[1] + 1);
    answer.push((temp.filter(num => item[2] < num)).sort((a, b) => a - b)[0] || -1);
  }

  return answer;
};