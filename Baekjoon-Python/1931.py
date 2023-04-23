# 1931번 회의실 배정

N = int(input())
meeting = [[] for _ in range(N)]

for i in range(N):
    meeting[i] = list(map(int, input().split()))

meeting.sort(key = lambda x: (x[1], x[0]))
start = meeting[0][1]
count = 1

for i in range(1, N):
    if start <= meeting[i][0]:
        start = meeting[i][1]
        count += 1

print(count)