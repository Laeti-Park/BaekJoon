import sys

n = int(sys.stdin.readline())
arr = []

for i in range(n):
    temp = int(sys.stdin.readline())
    if temp == 0:
        arr.pop()
    else:
        arr.append(temp)

print(sum(arr))