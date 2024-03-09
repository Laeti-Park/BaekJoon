// https://school.programmers.co.kr/learn/courses/30/lessons/181910

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = '';

rl.on('line', (line) => {
  arr = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(arr);
  console.log(answer);
});

const solution = arr => {
  let tempArray = [...arr];
  let array = arr;
  let count = 0;

  while (true) {
    for (let index in array) {
      if (array[index] >= 50 && array[index] % 2 === 0) {
        array[index] = array[index] / 2;
      } else if (array[index] < 50 && array[index] % 2 === 1) {
        array[index] = array[index] * 2 + 1;
      } else {
        array[index] = array[index];
      }
    }

    console.log(JSON.stringify(tempArray), JSON.stringify(array))
    if (JSON.stringify(tempArray) === JSON.stringify(array)) {
      return count;
    }
    tempArray = [...array];
    count++;
  }
};