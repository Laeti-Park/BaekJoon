// https://school.programmers.co.kr/learn/courses/30/lessons/181909

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let my_string = '';

rl.on('line', (line) => {
  my_string = line;

    rl.close();
}).on('close', () => {
  const answer = solution(my_string);
  console.log(answer);
});

const solution = (my_string) => {
  let answer= []
  for (let i = 1; i <= my_string.length; i++) {
    answer.push(my_string.slice(my_string.length - i));
  }

  return answer.sort();
};