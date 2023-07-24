import sys

input = sys.stdin.readline

N, M, B = map(int, input().split())
ground = []
time = sys.maxsize
height = 0

for i in range(N):
    ground.append(list(map(int, input().rstrip().split())))

for i in range(257):
    use, take = 0, 0

    for j in range(N):
        for k in range(M):
            if ground[j][k] > i:
                take += ground[j][k] - i
            else:
                use += i - ground[j][k]

    if use > take + B:
        continue

    temp = take * 2 + use

    if temp <= time:
        time = temp
        height = i

print(time, height)
