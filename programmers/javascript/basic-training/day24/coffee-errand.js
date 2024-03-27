// https://school.programmers.co.kr/learn/courses/30/lessons/181837

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let order = [];

rl.on('line', (line) => {
  order = line.split(' ');
  rl.close();
}).on('close', () => {
  const answer = solution(order);
  console.log(answer);
});

const solution = order => {
  const americano = ['iceamericano', 'americanoice', 'hotamericano', 'americanohot', 'americano', 'anything'];
  const latte = ['icecafelatte', 'cafelatteice', 'hotcafelatte', 'cafelattehot', 'cafelatte'];
  let answer = 0;

  for (let i = 0; i < order.length; i++) {
    if (americano.includes(order[i])) {
      answer += 4500;
    } else if (latte.includes(order[i])) {
      answer += 5000;
    }
  }

  return answer;
};