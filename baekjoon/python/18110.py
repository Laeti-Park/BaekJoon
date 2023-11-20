import sys

input = sys.stdin.readline

N = int(input())


def realRound(num):
    if num - int(num) >= 0.5:
        return int(num) + 1
    else:
        return int(num)


if N == 0:
    print(0)
else:
    score = []
    for i in range(N):
        score.append(int(input()))

    score = sorted(score)
    trimmedMean = realRound(N * 0.15)

    if trimmedMean != 0:
        score = score[trimmedMean:-trimmedMean]

    print(realRound(sum(score) / (N - trimmedMean * 2)))
