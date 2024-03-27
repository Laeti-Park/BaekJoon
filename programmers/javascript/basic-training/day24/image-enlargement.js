// https://school.programmers.co.kr/learn/courses/30/lessons/181836

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let picture = [];
let k = 0;
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    picture = line.split(' ');
  } else {
    k = Number(line);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(picture, k);
  console.log(answer);
});

const solution = (picture, k) => {
  let answer = [];
  for (let i = 0; i < picture.length; i++) {
    let temp = '';
    for (let j = 0; j < picture[i].length; j++) {
      for (let l = 0; l < k; l++) {
        temp += picture[i][j];
      }
    }
    for (let m = 0; m < k; m++) {
      answer.push(temp);
    }
  }

  return answer;
};