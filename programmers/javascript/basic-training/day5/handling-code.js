// https://school.programmers.co.kr/learn/courses/30/lessons/181932

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  const answer = solution(input);
  console.log(answer);
});

const solution = (code) => {
  let answer = '';
  let mode = 0;

  // idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서
  for (let i = 0; i < code.length; i++) {

    // code[idx] === '1' or code[idx] !== '1'
    // code[idx] === '1'
    if (code[i] === '1') {
      // mode = 0 => (0 + 1)1을 2로 나눈 나머지 = 1
      // mode = 1 => (1 + 1)2를 2로 나눈 나머지 = 0
      mode = (mode + 1) % 2;
    }
    // code[idx] !== '1'
    else if (mode === 0 && i % 2 === 0) { // mode가 0일 때 && idx가 짝수일 때
      answer += code[i];
    } else if (mode === 1 && i % 2 === 1) { // mode가 1일 때 && idx가 홀수일 때
      answer += code[i];
    }
  }

  if (answer !== '') {
    return answer;
  } else {
    return 'EMPTY';
  }
};