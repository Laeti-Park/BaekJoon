N, M, K = map(int, input().split())
data = list(map(int, input().split()))
answer = 0
count = K

data.sort()

for i in range(M):
    if count > 0:
        count -= 1
        answer += data[N-1]
    else:
        count = K
        answer += data[N-2]

print(answer)
