# 3980번 선발 명단

N = int(input())

for i in range(N):
    players = []
    sum = 0
    for j in range(11):
        players.append(list(map(int, input().split())))

    for a in range(11):
        temp = 0
        for b in range(11):
            temp += players[b][b-a]
            print(b, b+a-10)
            if temp > sum:
                sum = temp

    print(sum)
