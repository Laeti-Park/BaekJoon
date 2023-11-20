import sys

input = sys.stdin.readline
nuguGroup = {}
answer = []

N, M = map(int, input().split())

for i in range(N):
    name = input().rstrip()
    nuguGroup[name] = 1

for i in range(M):
    name = input().rstrip()
    if name in nuguGroup:
        answer.append(name)
    else:
        nuguGroup[name] = 1

print(len(answer))
for i in sorted(answer):
    print(i)
