N, M = map(int, input().split())
x, y, d = map(int, input().split())

mark = [[0] * M for _ in range(N)]

ground = []
for i in range(N):
    ground.append(list(map(int, input().split())))
mark[x][y] = 1

turn = 0
answer = 1
direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]

while True:
    nx = x
    ny = y

    d += 1
    if d > 3:
        d = 0
    turn += 1
    if turn == 4:
        nx -= direction[d][0]
        ny -= direction[d][1]
        if ground[ny][nx] != 0:
            break
        x = nx
        y = ny
        turn = 0
        continue

    nx += direction[d][0]
    ny += direction[d][1]

    if nx < 0 or ny < 0 or nx > M or ny > N or ground[ny][nx] != 0 or mark[ny][nx] != 0:
        continue
    else:
        x = nx
        y = ny
        mark[ny][nx] = 1
        answer += 1
        turn = 0

print(answer)
