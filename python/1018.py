# 1018번 체스판 다시 칠하기

N, M = map(int, input().split())
row = ["BWBWBWBW", "WBWBWBWB"]
board = []
color = 2500

for i in range(N):
    board.append(input())

for i in range(N - 7):
    for j in range(M - 7):
        for c in range(2):
            temp = 0
            for a in range(i, i + 8):
                for b in range(j, j + 8):
                    if c == 0:
                        row.sort()
                    else:
                        row.sort(reverse=True)
                    if row[a % 2][b % 2] != board[a][b]:
                        temp += 1
            if color > temp:
                color = temp

print(color)
