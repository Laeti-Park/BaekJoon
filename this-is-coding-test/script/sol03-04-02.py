N, K = map(int, input().split())
count = 0

while True:
    if (N % K != 0):
        count += N % K
        N -= N % K
    else:
        N //= K
        count += 1
    if N < K:
        break

print(count)
