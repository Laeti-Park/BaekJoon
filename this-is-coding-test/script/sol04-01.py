N = int(input())
plans = list(input().split())

x, y = 1, 1
direction = ["L", "R", "U", "D"]
distance = [(0, -1), (0, 1), (-1, 0), (1, 0)]

for plan in plans:
    nx, ny = distance[direction.index(plan)]
    if x + nx < 1 or x + nx >= N or y + ny < 1 or y + ny >= N:
        continue
    else:
        x += nx
        y += ny

print(x, y)
