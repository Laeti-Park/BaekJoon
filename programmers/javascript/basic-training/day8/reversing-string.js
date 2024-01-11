// https://school.programmers.co.kr/learn/courses/30/lessons/181913

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

const solution = (my_string, queries) => {
  const array = my_string.split('');
  queries.map(item => {
    for (let i = 0; i < (item[1] - item[0]) / 2; i++){
      const temp = array[item[1] - i];
      array[item[1] - i] = array[item[0] + i];
      array[item[0] + i] = temp;
    }
  });

  return array.join('');
};