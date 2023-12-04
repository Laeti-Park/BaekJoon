// https://school.programmers.co.kr/learn/courses/30/lessons/155652

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let s = '';
let skip = '';
let index = 0;
let count = 0;

rl.on('line', (line) => {
    if (count === 0) {
        s = line;
    } else if (count === 1) {
        skip = line;
    } else {
        index = line;
    }
    count++;

    if (count > 2) {
        rl.close();
    }
}).on('close', () => {
    const answer = solution(s, skip, Number(index));
    console.log(answer);
});

const solution = (s, skip, index) => {
    let alphabet = [...Array(26)].map((_, index) =>
        String.fromCharCode(97 + index),
    );
    let answer = '';
    const skipLetters = skip.split('');
    let skippedAlphabet = alphabet;
    skipLetters.map((item) => {
        skippedAlphabet = skippedAlphabet.filter(
            (l) => l.charCodeAt(0) !== item.charCodeAt(0),
        );
    });

    s.split('').map((letter) => {
        answer +=
            skippedAlphabet[
            (skippedAlphabet.indexOf(letter) + index) % skippedAlphabet.length
            ];
    });

    return answer;
};
