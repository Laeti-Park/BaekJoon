# 2798번 블랙잭

N, M = map(int, input().split())

cards = list(map(int, input().split()))
sorted(cards)

sum = 0

for i in range(N):
    if cards[i] > M:
        break
    for j in range(i+1, N):
        for k in range(j+1, N):
            if cards[i] + cards[j] + cards[k] > sum and cards[i] + cards[j] + cards[k] <= M:
                sum = cards[i] + cards[j] + cards[k]

print(sum)
