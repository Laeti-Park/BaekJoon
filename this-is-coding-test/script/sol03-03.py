N, M = map(int, input().split())

result = 0
for i in range(N):
    data = list(map(int, input().split()))
    minNum = min(data)
    result = max(result, minNum)

print(result)
